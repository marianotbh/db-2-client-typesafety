import {ClassType, Field, Int, ObjectType} from 'type-graphql'

export function Notification<T>(TItemClass: ClassType<T>) {
  @ObjectType({isAbstract: true})
  abstract class NotificationClass {
    @Field()
    message: string

    @Field(() => TItemClass)
    payload: T

    @Field()
    date: Date
  }

  return NotificationClass
}
