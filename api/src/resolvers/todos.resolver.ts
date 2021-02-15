import {
  Arg,
  Args,
  Mutation,
  Publisher,
  PubSub,
  Query,
  Resolver,
  Root,
  Subscription
} from 'type-graphql'
import {plainToClass} from 'class-transformer'
import {Todo} from '../dtos/todos/todo.type'
import {Todos} from '../dtos/todos/todos.type'
import {AddTodoInput} from '../dtos/todos/add-todo.input'
import {GetTodosArgs} from '../dtos/todos/get-todos.args'
import {EditTodoInput} from '../dtos/todos/edit-todo.input'
import {TodoId} from '../dtos/todos/todo-id.type'
import {TodoAddedNotification} from '../dtos/todos/added-todo.notification'
import {
  addTodo,
  deleteTodo,
  editTodo,
  findTodo,
  getTodos,
  toggleTodo
} from '../services/todos.service'

@Resolver(Todo)
export class TodosResolver {
  @Query(() => Todos)
  async todos(@Args() {skip, take}: GetTodosArgs) {
    const [items, total] = await getTodos(skip, take)

    return plainToClass(Todos, {items, total})
  }

  @Query(() => Todo)
  async todo(@Arg('id') id: string) {
    const todo = await findTodo(id)

    return plainToClass(Todo, todo)
  }

  @Mutation(() => Todo)
  async addTodo(
    @Arg('input') {title, description}: AddTodoInput,
    @PubSub('TODOS') pubsub: Publisher<Todo>
  ) {
    const result = await addTodo(title, description)
    const todo = plainToClass(Todo, result)

    await pubsub(todo)

    return todo
  }

  @Mutation(() => Todo)
  async toggleTodo(@Arg('id') id: string) {
    const result = await toggleTodo(id)

    return plainToClass(Todo, result)
  }

  @Mutation(() => Todo)
  async editTodo(@Arg('input') {id, title, description}: EditTodoInput) {
    const result = await editTodo(id, title, description)

    return plainToClass(Todo, result)
  }

  @Mutation(() => TodoId)
  async deleteTodo(@Arg('id') id: string) {
    await deleteTodo(id)

    return plainToClass(TodoId, {id})
  }

  @Subscription({topics: 'TODOS'})
  onTodoAdded(@Root() payload: Todo): TodoAddedNotification {
    return {
      message: `Todo ${payload.title} was created`,
      payload,
      date: new Date()
    }
  }
}
