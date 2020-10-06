import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class UserCandy extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(type => User, { eager: true })
  @JoinColumn()
  user: User

  @Column({
    default: 0,
  })
  candyCount: number
}
