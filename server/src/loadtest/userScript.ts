import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import 'cross-fetch/polyfill' // enables fetch in node
import { answerSurveyQuestion } from '../../../web/src/view/playground/mutateSurveys'

/**
 * A user script is a sequence of HTTP requests (REST/GraphQL API requests, page loads, etc.)
 *
 * Each user arriving at the site during the load test will execute the user script.
 */
export type UserScript = () => Promise<any>

// set this is you require authenticated requests
const authToken = undefined

export async function userScript() {
  await fetch('https://cs188.cloudcity.computer/')
  await fetch('https://cs188.cloudcity.computer/')
  await fetch('https://cs188.cloudcity.computer/')

  await answerSurveyQuestion(makeApolloClient(), { answer: 'test answer', questionId: 1 })
  await answerSurveyQuestion(makeApolloClient(), { answer: 'test answer', questionId: 1 })
  await answerSurveyQuestion(makeApolloClient(), { answer: 'test answer', questionId: 1 })
  await answerSurveyQuestion(makeApolloClient(), { answer: 'test answer', questionId: 1 })
  await answerSurveyQuestion(makeApolloClient(), { answer: 'test answer', questionId: 1 })
}

function makeApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: `https://cs188.cloudcity.computer/graphql`,
      credentials: 'same-origin',
      fetch: async (uri: any, options: any) => {
        const reqBody = JSON.parse(options!.body! as string)
        const opName = reqBody.operationName
        const actionName = reqBody.variables?.action?.actionName
        const headers = authToken ? { ...options.headers, 'x-authtoken': authToken } : options.headers
        return fetch(`${uri}?opName=${opName}${actionName ? `&actionName=${actionName}` : ''}`, {
          ...options,
          headers,
        })
      },
    }),
    cache: new InMemoryCache(),
  })
}
