import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]?: Maybe<T[SubKey]>}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]: Maybe<T[SubKey]>}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
}

export type Query = {
  __typename?: 'Query'
  todos: Todos
  todo: Todo
}

export type QueryTodosArgs = {
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  completed?: Maybe<Scalars['Boolean']>
}

export type QueryTodoArgs = {
  id: Scalars['String']
}

export type Todos = {
  __typename?: 'Todos'
  items: Array<Todo>
  total: Scalars['Int']
}

export type Todo = {
  __typename?: 'Todo'
  id: Scalars['String']
  title: Scalars['String']
  description: Scalars['String']
  isComplete: Scalars['Boolean']
  createDate?: Maybe<Scalars['DateTime']>
  updateDate?: Maybe<Scalars['DateTime']>
  deleteDate?: Maybe<Scalars['DateTime']>
}

export type Mutation = {
  __typename?: 'Mutation'
  addTodo: Todo
  toggleTodo: Todo
  editTodo: Todo
  deleteTodo: TodoId
}

export type MutationAddTodoArgs = {
  input: AddTodoInput
}

export type MutationToggleTodoArgs = {
  id: Scalars['String']
}

export type MutationEditTodoArgs = {
  input: EditTodoInput
}

export type MutationDeleteTodoArgs = {
  id: Scalars['String']
}

export type AddTodoInput = {
  title: Scalars['String']
  description: Scalars['String']
}

export type EditTodoInput = {
  id: Scalars['String']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type TodoId = {
  __typename?: 'TodoId'
  id: Scalars['String']
}

export type FindTodoQueryVariables = Exact<{
  id: Scalars['String']
}>

export type FindTodoQuery = {__typename?: 'Query'} & {
  todo: {__typename?: 'Todo'} & Pick<
    Todo,
    | 'id'
    | 'title'
    | 'description'
    | 'isComplete'
    | 'createDate'
    | 'updateDate'
    | 'deleteDate'
  >
}

export type ListTodosQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  completed?: Maybe<Scalars['Boolean']>
}>

export type ListTodosQuery = {__typename?: 'Query'} & {
  todos: {__typename?: 'Todos'} & Pick<Todos, 'total'> & {
      items: Array<
        {__typename?: 'Todo'} & Pick<
          Todo,
          'id' | 'title' | 'description' | 'isComplete'
        >
      >
    }
}

export type AddTodoMutationVariables = Exact<{
  title: Scalars['String']
  description: Scalars['String']
}>

export type AddTodoMutation = {__typename?: 'Mutation'} & {
  addTodo: {__typename?: 'Todo'} & Pick<Todo, 'id' | 'title'>
}

export type ToggleTodoMutationVariables = Exact<{
  id: Scalars['String']
}>

export type ToggleTodoMutation = {__typename?: 'Mutation'} & {
  toggleTodo: {__typename?: 'Todo'} & Pick<
    Todo,
    'id' | 'title' | 'description' | 'isComplete' | 'updateDate'
  >
}

export type EditTodoMutationVariables = Exact<{
  id: Scalars['String']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}>

export type EditTodoMutation = {__typename?: 'Mutation'} & {
  editTodo: {__typename?: 'Todo'} & Pick<
    Todo,
    'id' | 'title' | 'description' | 'isComplete' | 'updateDate'
  >
}

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['String']
}>

export type DeleteTodoMutation = {__typename?: 'Mutation'} & {
  deleteTodo: {__typename?: 'TodoId'} & Pick<TodoId, 'id'>
}

export const FindTodoDocument = gql`
  query FindTodo($id: String!) {
    todo(id: $id) {
      id
      title
      description
      isComplete
      createDate
      updateDate
      deleteDate
    }
  }
`

/**
 * __useFindTodoQuery__
 *
 * To run a query within a React component, call `useFindTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindTodoQuery(
  baseOptions: Apollo.QueryHookOptions<FindTodoQuery, FindTodoQueryVariables>
) {
  return Apollo.useQuery<FindTodoQuery, FindTodoQueryVariables>(
    FindTodoDocument,
    baseOptions
  )
}
export function useFindTodoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindTodoQuery,
    FindTodoQueryVariables
  >
) {
  return Apollo.useLazyQuery<FindTodoQuery, FindTodoQueryVariables>(
    FindTodoDocument,
    baseOptions
  )
}
export type FindTodoQueryHookResult = ReturnType<typeof useFindTodoQuery>
export type FindTodoLazyQueryHookResult = ReturnType<
  typeof useFindTodoLazyQuery
>
export type FindTodoQueryResult = Apollo.QueryResult<
  FindTodoQuery,
  FindTodoQueryVariables
>
export const ListTodosDocument = gql`
  query ListTodos($skip: Int, $take: Int, $completed: Boolean) {
    todos(skip: $skip, take: $take, completed: $completed) {
      items {
        id
        title
        description
        isComplete
      }
      total
    }
  }
`

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      completed: // value for 'completed'
 *   },
 * });
 */
export function useListTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>
) {
  return Apollo.useQuery<ListTodosQuery, ListTodosQueryVariables>(
    ListTodosDocument,
    baseOptions
  )
}
export function useListTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListTodosQuery,
    ListTodosQueryVariables
  >
) {
  return Apollo.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(
    ListTodosDocument,
    baseOptions
  )
}
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>
export type ListTodosLazyQueryHookResult = ReturnType<
  typeof useListTodosLazyQuery
>
export type ListTodosQueryResult = Apollo.QueryResult<
  ListTodosQuery,
  ListTodosQueryVariables
>
export const AddTodoDocument = gql`
  mutation AddTodo($title: String!, $description: String!) {
    addTodo(input: {title: $title, description: $description}) {
      id
      title
    }
  }
`
export type AddTodoMutationFn = Apollo.MutationFunction<
  AddTodoMutation,
  AddTodoMutationVariables
>

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddTodoMutation,
    AddTodoMutationVariables
  >
) {
  return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(
    AddTodoDocument,
    baseOptions
  )
}
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<
  AddTodoMutation,
  AddTodoMutationVariables
>
export const ToggleTodoDocument = gql`
  mutation ToggleTodo($id: String!) {
    toggleTodo(id: $id) {
      id
      title
      description
      isComplete
      updateDate
    }
  }
`
export type ToggleTodoMutationFn = Apollo.MutationFunction<
  ToggleTodoMutation,
  ToggleTodoMutationVariables
>

/**
 * __useToggleTodoMutation__
 *
 * To run a mutation, you first call `useToggleTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTodoMutation, { data, loading, error }] = useToggleTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleTodoMutation,
    ToggleTodoMutationVariables
  >
) {
  return Apollo.useMutation<ToggleTodoMutation, ToggleTodoMutationVariables>(
    ToggleTodoDocument,
    baseOptions
  )
}
export type ToggleTodoMutationHookResult = ReturnType<
  typeof useToggleTodoMutation
>
export type ToggleTodoMutationResult = Apollo.MutationResult<ToggleTodoMutation>
export type ToggleTodoMutationOptions = Apollo.BaseMutationOptions<
  ToggleTodoMutation,
  ToggleTodoMutationVariables
>
export const EditTodoDocument = gql`
  mutation EditTodo($id: String!, $title: String, $description: String) {
    editTodo(input: {id: $id, title: $title, description: $description}) {
      id
      title
      description
      isComplete
      updateDate
    }
  }
`
export type EditTodoMutationFn = Apollo.MutationFunction<
  EditTodoMutation,
  EditTodoMutationVariables
>

/**
 * __useEditTodoMutation__
 *
 * To run a mutation, you first call `useEditTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTodoMutation, { data, loading, error }] = useEditTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useEditTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditTodoMutation,
    EditTodoMutationVariables
  >
) {
  return Apollo.useMutation<EditTodoMutation, EditTodoMutationVariables>(
    EditTodoDocument,
    baseOptions
  )
}
export type EditTodoMutationHookResult = ReturnType<typeof useEditTodoMutation>
export type EditTodoMutationResult = Apollo.MutationResult<EditTodoMutation>
export type EditTodoMutationOptions = Apollo.BaseMutationOptions<
  EditTodoMutation,
  EditTodoMutationVariables
>
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >
) {
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    baseOptions
  )
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>
