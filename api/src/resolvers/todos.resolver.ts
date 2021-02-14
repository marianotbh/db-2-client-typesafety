import {Arg, Args, Mutation, Query, Resolver} from 'type-graphql'
import {plainToClass} from 'class-transformer'
import {Todo} from '../dtos/todos/todo.dto'
import {Todos} from '../dtos/todos/todos.dto'
import {AddTodoInput} from '../dtos/todos/add-todo.dto'
import {GetTodosArgs} from '../dtos/todos/get-todos.dto'
import {EditTodoInput} from '../dtos/todos/edit-todo.dto'
import {
  addTodo,
  deleteTodo,
  editTodo,
  findTodo,
  getTodos,
  toggleTodo
} from '../services/todos.service'
import {TodoId} from '../dtos/todos/todo-id.dto'

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
  async addTodo(@Arg('input') {title, description}: AddTodoInput) {
    const todo = await addTodo(title, description)

    return plainToClass(Todo, todo)
  }

  @Mutation(() => Todo)
  async toggleTodo(@Arg('id') id: string) {
    const todo = await toggleTodo(id)

    return plainToClass(Todo, todo)
  }

  @Mutation(() => Todo)
  async editTodo(@Arg('input') {id, title, description}: EditTodoInput) {
    const todo = await editTodo(id, title, description)

    return plainToClass(Todo, todo)
  }

  @Mutation(() => TodoId)
  async deleteTodo(@Arg('id') id: string) {
    await deleteTodo(id)

    return plainToClass(TodoId, {id})
  }
}
