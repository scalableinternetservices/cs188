import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Survey } from './Survey'
import { SurveyAnswer } from './SurveyAnswer'

@Entity()
export class SurveyQuestion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  prompt: string

  @Column('simple-array', { nullable: true })
  choices: string[]

  @OneToMany(type => SurveyAnswer, answer => answer.question, { eager: true })
  answers: SurveyAnswer[]

  @ManyToOne(type => Survey, survey => survey.questions)
  survey: Survey
}
