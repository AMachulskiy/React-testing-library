import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
})

const createStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}

export default createStore

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
