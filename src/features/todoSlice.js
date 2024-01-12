import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: (text) => { //added by suggestion of ChatGPT
                // Prepare callback to generate a unique ID for each todo
                return { payload: { id: nanoid(), text, completed: false } }
            }
        },
        toggleTodo: (state, action) => {            
            const index = state.items.findIndex(todo => todo.id === action.payload)
            if (index !== -1) {
                state.items[index].completed = !state.items[index].completed
            }
        },
        removeTodo: (state, action) => {
            const index = state.items.findIndex(todo => todo.id === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1)
            }
        },
        clearTodo: (state) => {
            state.items = []
        }
    }
})

export const { addTodo, removeTodo, clearTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
