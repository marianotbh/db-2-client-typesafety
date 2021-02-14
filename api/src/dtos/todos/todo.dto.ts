import {Field, ObjectType} from 'type-graphql'

@ObjectType()
export class Todo {
  @Field()
  id: string

  @Field()
  title: string

  @Field()
  description: string

  @Field()
  isComplete: boolean

  @Field(() => Date, {nullable: true})
  createDate: Date

  @Field(() => Date, {nullable: true})
  updateDate: Date

  @Field(() => Date, {nullable: true})
  deleteDate: Date
}
