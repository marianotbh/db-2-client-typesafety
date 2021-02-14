import {ArgsType, Field, Int} from 'type-graphql'
import {Max, Min} from 'class-validator'

@ArgsType()
export class GetTodosArgs {
  @Field(type => Int, {nullable: true, defaultValue: 0})
  @Min(0)
  skip?: number

  @Field(type => Int, {nullable: true, defaultValue: 10})
  @Min(1)
  @Max(50)
  take?: number

  @Field({nullable: true})
  completed?: boolean
}
