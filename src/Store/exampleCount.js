import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const exampleCounteSlice = createSlice({
    name: 'exampleCounter',
    initialState: initialState,

    reducers: {
        incrementCountExample: (state) => {
            state.count++
        },
        decrementCountExample: (state) => {
            state.count--
        },
        resetCountExample: (state) => {
            state.count = 0
        }
    }
})

export const exampleCounterReduces = exampleCounteSlice.reducer
export const { incrementCountExample, decrementCountExample, resetCountExample } = exampleCounteSlice.actions 