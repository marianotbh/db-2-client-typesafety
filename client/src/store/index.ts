import {configureStore} from '@reduxjs/toolkit'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux'
import rootReducer from './rootReducer'

export type State = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export type Dispatch = typeof store.dispatch

export function useDispatch(): Dispatch {
  return useReduxDispatch()
}

export function useSelector<T>(selector: (state: State) => T): T {
  return useReduxSelector(selector)
}

export default store
