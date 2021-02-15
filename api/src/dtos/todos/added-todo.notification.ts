import {ObjectType} from 'type-graphql'
import {Notification} from '../common/notification.dto'
import {Todo} from './todo.type'

@ObjectType()
export class TodoAddedNotification extends Notification(Todo) {}
