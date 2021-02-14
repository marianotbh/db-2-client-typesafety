import {getRepository} from 'typeorm'
import {UserInputError} from 'apollo-server'
import {v4 as uuid} from 'uuid'
import {TodoEntity} from '../entities/todo.entity'

export async function getTodos(
  skip?: number,
  take?: number,
  completed?: boolean
) {
  const todosRepository = getRepository(TodoEntity)

  const todos = await todosRepository.findAndCount({
    skip,
    take,
    ...(completed ? {} : {where: {isComplete: false}}),
    order: {createDate: 'DESC'}
  })

  return todos
}

export async function findTodo(id: string) {
  const todosRepository = getRepository(TodoEntity)

  const todo = await todosRepository.findOne(id)

  if (!todo) {
    throw new UserInputError(`Todo with id ${id} does not exist`)
  }

  return todo
}

export async function addTodo(title: string, description: string) {
  const todosRepository = getRepository(TodoEntity)

  const id = uuid()
  const todo = new TodoEntity()
  todo.id = id
  todo.title = title
  todo.description = description

  await todosRepository.save(todo)

  return await todosRepository.findOne(id)
}

export async function editTodo(
  id: string,
  title?: string,
  description?: string
) {
  const todosRepository = getRepository(TodoEntity)
  const todo = await todosRepository.findOne(id)

  if (!todo) {
    throw new UserInputError(`Todo with id ${id} does not exist`)
  }

  todo.title = title ?? todo.title
  todo.description = description ?? todo.description

  await todosRepository.save(todo)

  return todo
}

export async function toggleTodo(id: string) {
  const todosRepository = getRepository(TodoEntity)
  const todo = await todosRepository.findOne(id)

  if (!todo) {
    throw new UserInputError(`Todo with id ${id} does not exist`)
  }

  todo.isComplete = !todo.isComplete

  await todosRepository.save(todo)

  return todo
}

export async function deleteTodo(id: string) {
  const todosRepository = getRepository(TodoEntity)
  const todo = await todosRepository.findOne(id)

  if (!todo) {
    throw new UserInputError(`Todo with id ${id} does not exist`)
  }

  await todosRepository.softDelete(todo)
}
