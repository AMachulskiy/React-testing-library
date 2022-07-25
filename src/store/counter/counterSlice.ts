import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { decrement, increment } = counterSlice.actions
export default counterSlice.reducer
