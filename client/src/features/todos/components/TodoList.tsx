import styled from 'styled-components'
import {Todo} from '../../../api'
import TodoListItem from './TodoListItem'

export type TodoListProps = {
  todos?: Partial<Todo>[]
  isLoading?: boolean
  error?: string
  onClickTodo: (id: string) => void
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export default function TodoList({
  todos,
  isLoading,
  error,
  onClickTodo,
  onToggleTodo,
  onDeleteTodo
}: TodoListProps) {
  const createClickHandler = (id: string) => () => {
    onClickTodo(id)
  }

  const createToggleHandler = (id: string) => () => {
    onToggleTodo(id)
  }

  const createDeleteHandler = (id: string) => () => {
    onDeleteTodo(id)
  }

  if (isLoading) return <Loader>loading...</Loader>

  if (error) return <Error>error</Error>

  if (todos && todos.length > 0)
    return (
      <Wrapper>
        {todos.map(todo => (
          <TodoListItem
            key={todo.id}
            title={todo.title!}
            description={todo.description!}
            isComplete={todo.isComplete!}
            onToggle={createToggleHandler(todo.id!)}
            onClick={createClickHandler(todo.id!)}
            onDelete={createDeleteHandler(todo.id!)}
          />
        ))}
      </Wrapper>
    )

  return <Placeholder>Sorry, no todos found!</Placeholder>
}

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Loader = styled.span`
  opacity: 0.8;
  font-weight: 600;
  font-size: 1.5rem;
`

const Error = styled.span`
  color: red;
  font-weight: 600;
  font-size: 1.2rem;
`

const Placeholder = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.33rem;
  font-size: 1.2rem;
  font-weight: 600;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`
