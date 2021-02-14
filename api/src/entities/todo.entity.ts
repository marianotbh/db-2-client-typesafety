import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'

@Entity({name: 'todos'})
export class TodoEntity {
  @PrimaryColumn()
  id: string

  @Column({nullable: false})
  title: string

  @Column({nullable: false})
  description: string

  @Column({name: 'is_complete', default: false})
  isComplete: boolean

  @CreateDateColumn({name: 'create_date', type: 'timestamptz'})
  createDate: Date

  @UpdateDateColumn({name: 'update_date', type: 'timestamptz'})
  updateDate: Date

  @DeleteDateColumn({name: 'delete_date', type: 'timestamptz'})
  deleteDate: Date
}
