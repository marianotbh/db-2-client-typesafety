import {ObjectType} from 'type-graphql'
import {List} from '../common/list.dto'
import {Todo} from './todo.type'

@ObjectType()
export class Todos extends List(Todo) {}
