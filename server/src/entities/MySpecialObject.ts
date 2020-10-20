import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class MySpecialObject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
}
