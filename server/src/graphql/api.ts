import { readFileSync } from 'fs'
import { PubSub } from 'graphql-yoga'
import path from 'path'
import { getRepository } from 'typeorm'
import { check } from '../../../common/src/util'
import { Survey } from '../entities/Survey'
import { SurveyAnswer } from '../entities/SurveyAnswer'
import { SurveyQuestion } from '../entities/SurveyQuestion'
import { User } from '../entities/User'
import { UserCandy } from '../entities/UserCandy'
import { Resolvers } from './schema.types'

export const pubsub = new PubSub()

export function getSchema() {
  const schema = readFileSync(path.join(__dirname, 'schema.graphql'))
  return schema.toString()
}

interface Context {
  user: User | null
  request: Request
  response: Response
  pubsub: PubSub
}

export const graphqlRoot: Resolvers<Context> = {
  Query: {
    self: (_, args, ctx) => ctx.user,
    survey: async (_, { surveyId }) => (await Survey.findOne({ where: { id: surveyId } })) || null,
    surveys: () => Survey.find(),
    candies: async () => {
      const candies = await UserCandy.find()
      if (candies.length !== 0) {
        return candies
      }
      const users = await User.find()
      const newCandies = users.map(user => {
        const userCandy = new UserCandy()
        userCandy.user = user
        userCandy.candyCount = 0
        return userCandy.save()
      })

      return await Promise.all(newCandies)
    },
  },
  Mutation: {
    answerSurvey: async (_, { input }, ctx) => {
      const { answer, questionId } = input
      const question = check(await SurveyQuestion.findOne({ where: { id: questionId }, relations: ['survey'] }))

      const surveyAnswer = new SurveyAnswer()
      surveyAnswer.question = question
      surveyAnswer.answer = answer
      await surveyAnswer.save()

      question.survey.currentQuestion?.answers.push(surveyAnswer)
      ctx.pubsub.publish('SURVEY_UPDATE_' + question.survey.id, question.survey)

      return true
    },
    nextSurveyQuestion: async (_, { surveyId }, ctx) => {
      // check(ctx.user?.userType === UserType.Admin)
      const survey = check(await Survey.findOne({ where: { id: surveyId } }))
      survey.currQuestion = survey.currQuestion == null ? 0 : survey.currQuestion + 1
      await survey.save()
      ctx.pubsub.publish('SURVEY_UPDATE_' + surveyId, survey)
      return survey
    },
    throwCandy: async (_, { email }, ctx) => {
      const candy = await getRepository(UserCandy)
        .createQueryBuilder('candy')
        .leftJoinAndSelect('candy.user', 'user')
        .where('user.email = :email', { email })
        .getOne()
      if (!candy) {
        return false
      }
      // give a random amount of candy
      candy.candyCount += Math.floor(Math.random() * 4) + 1
      await candy.save()
      ctx.pubsub.publish('CANDY_UPDATE', candy)
      return true
    },
  },
  Subscription: {
    surveyUpdates: {
      subscribe: (_, { surveyId }, ctx) => ctx.pubsub.asyncIterator('SURVEY_UPDATE_' + surveyId),
      resolve: (payload: any) => payload,
    },
    candyUpdates: {
      subscribe: (_, arg, ctx) => ctx.pubsub.asyncIterator('CANDY_UPDATE'),
      resolve: (payload: any) => payload,
    },
  },
}
