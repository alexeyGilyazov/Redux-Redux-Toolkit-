import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { exampleCounterReduces } from './exampleCount'
import { exampleTodoReducer } from './exampleTodoSlice'
import todoReducer from './todoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        exampleCounter: exampleCounterReduces,
        exampleTodoSlice: exampleTodoReducer
    }
})
