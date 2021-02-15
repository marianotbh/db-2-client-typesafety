import {Field, InputType} from 'type-graphql'
import {IsNotEmpty} from 'class-validator'

@InputType()
export class AddTodoInput {
  @Field(() => String)
  @IsNotEmpty()
  title: string

  @Field(() => String)
  @IsNotEmpty()
  description: string
}
