import {Field, InputType} from 'type-graphql'
import {IsNotEmpty} from 'class-validator'

@InputType()
export class EditTodoInput {
  @Field(() => String)
  @IsNotEmpty()
  id: string

  @Field(() => String, {nullable: true})
  title: string

  @Field(() => String, {nullable: true})
  description: string
}
