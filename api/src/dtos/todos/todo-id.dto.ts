import {Field, ObjectType} from 'type-graphql'

@ObjectType()
export class TodoId {
  @Field()
  id: string
}
