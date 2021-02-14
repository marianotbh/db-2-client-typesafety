import {ClassType, Field, Int, ObjectType} from 'type-graphql'

export function List<T>(TItemClass: ClassType<T>) {
  @ObjectType({isAbstract: true})
  abstract class ListClass {
    @Field(type => [TItemClass])
    items: T[]

    @Field(type => Int)
    total: number
  }

  return ListClass
}
