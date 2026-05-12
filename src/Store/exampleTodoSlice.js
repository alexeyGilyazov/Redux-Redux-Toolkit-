import { createSlice } from "@reduxjs/toolkit";


const exampleTodoSlice = createSlice({
    name: 'exampleTodoSlice',
    initialState: {
        exampleTodos: []
    },
    reducers: {
        exampleAddTodo(state, action) {
            state.exampleTodos.push({
                id: Date.now(),
                text: action.payload.text,
                completed: false
            })
        },
        exampleRemoveTodo(state, action) {
            state.exampleTodos = state.exampleTodos.filter((todo) => todo.id !== action.payload.id)
        },
        exampleToggleComplited(state, action) {
            const toggleTodo = state.exampleTodos.find((todo) => todo.id === action.payload.id)
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
            }
        },
        exampleEditedTodo(state, action) {
            const currentTodo = state.exampleTodos.find((todo) => todo.id === action.payload.id)
            currentTodo.text = action.payload.text
        }
    }
})

export const exampleTodoReducer = exampleTodoSlice.reducer
export const { exampleAddTodo, exampleRemoveTodo, exampleToggleComplited, exampleEditedTodo } = exampleTodoSlice.actions