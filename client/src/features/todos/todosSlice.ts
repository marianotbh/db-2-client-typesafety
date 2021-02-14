import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TodosState = {
  selectedTodo: string | null
}

const initialState: TodosState = {
  selectedTodo: null
}

const {actions, reducer} = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodo(state, {payload}: PayloadAction<string>) {
      state.selectedTodo = payload
    },
    clearTodo(state) {
      state.selectedTodo = null
    }
  }
})

export const {clearTodo, setTodo} = actions

export default reducer
