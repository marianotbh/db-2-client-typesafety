import {useEffect} from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import {
  FindTodoDocument,
  ListTodosDocument,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useFindTodoLazyQuery,
  useListTodosQuery,
  useOnTodoAddedSubscription,
  useToggleTodoMutation
} from '../../api'
import TodoAdd, {Fields} from './components/TodoAdd'
import TodoDetail from './components/TodoDetail'
import TodoList from './components/TodoList'
import TodoListFilters from './components/TodoListFilters'
import useTodosFilters from './hooks/useTodosFilters'

export default function Todos() {
  const {
    showCompleted,
    setShowCompleted,
    pageNumber,
    pageSize,
    setPageNumber,
    setPageSize
  } = useTodosFilters({
    defaultShowCompleted: true,
    defaultPageNumber: 0,
    defaultPageSize: 10
  })
  const [
    createTodo,
    {loading: isCreating, error: createError}
  ] = useAddTodoMutation()
  const [findTodo, {data: todo, loading: isFinding}] = useFindTodoLazyQuery()
  const {
    data: todos,
    loading: isListing,
    error: getError,
    refetch
  } = useListTodosQuery({
    variables: {
      skip: pageNumber * pageSize,
      take: pageSize,
      completed: showCompleted || undefined
    }
  })
  const [toggleTodo] = useToggleTodoMutation()
  const [deleteTodo, {data: deletedTodo}] = useDeleteTodoMutation()
  const {data: addedTodo} = useOnTodoAddedSubscription()

  const handleSelectTodo = (id: string) => {
    findTodo({variables: {id}})
  }

  const handleCreateTodo = async ({title, description}: Fields) => {
    await createTodo({
      variables: {title, description},
      awaitRefetchQueries: true,
      refetchQueries: [
        {query: ListTodosDocument, variables: {skip: 0, take: pageSize}}
      ]
    })
  }

  const handleToggleTodo = async (id: string) => {
    await toggleTodo({
      variables: {id},
      awaitRefetchQueries: true,
      refetchQueries: [
        {query: ListTodosDocument, variables: {skip: 0, take: pageSize}},
        {query: FindTodoDocument, variables: {id}}
      ]
    })
  }

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo({
      variables: {id},
      awaitRefetchQueries: true,
      refetchQueries: [
        {query: ListTodosDocument, variables: {skip: 0, take: pageSize}},
        {query: FindTodoDocument, variables: {id}}
      ]
    })
  }

  useEffect(() => {
    if (addedTodo) {
      toast.success(addedTodo.onTodoAdded.message)
      refetch()
    }
  }, [addedTodo, refetch])

  useEffect(() => {
    if (createError) toast.success(createError.message)
  }, [createError])

  useEffect(() => {
    if (deletedTodo) toast.success(`todo ${deletedTodo.deleteTodo.id} deleted`)
  }, [deletedTodo])

  return (
    <Main>
      <Title>todos</Title>
      <Wrapper>
        <TodoAdd onSubmit={handleCreateTodo} isSubmitting={isCreating} />

        {isFinding ? (
          'loading...'
        ) : todo?.todo ? (
          <TodoDetail {...todo.todo} />
        ) : (
          <>
            <TodoListFilters
              pageSize={pageSize}
              pageNumber={pageNumber}
              showCompleted={showCompleted}
              onPageSizeChange={setPageSize}
              onPageNumberChange={setPageNumber}
              onShowCompletedChange={setShowCompleted}
            />
            <TodoList
              todos={todos?.todos.items!}
              isLoading={isListing}
              error={getError?.message}
              onClickTodo={handleSelectTodo}
              onToggleTodo={handleToggleTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          </>
        )}
      </Wrapper>
    </Main>
  )
}

const Main = styled.main``

const Title = styled.h1``

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
`
