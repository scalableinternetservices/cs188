import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { SurveyQuestion } from './SurveyQuestion'

@Entity()
export class Survey extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  currQuestion: number

  @OneToMany(() => SurveyQuestion, question => question.survey)
  questions: SurveyQuestion[]

  get isStarted() {
    return this.currQuestion != null
  }
}
