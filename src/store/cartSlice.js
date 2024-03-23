// here create the slice
import { createSlice } from '@reduxjs/toolkit'


const initialState = []

const cartSlice = createSlice({
    // reducer here creting
    name: 'cart',
    initialState,
    reducers: {
        //add , remove, modify into the cart {what you want to do here}
        add(state, action) {
            state.push(action.payload) //action.payload give the data
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})


export const { add, remove } = cartSlice.actions
export default cartSlice.reducer