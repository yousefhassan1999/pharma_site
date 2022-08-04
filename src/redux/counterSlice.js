import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name : 'counter',
    initialState :{
        count : 10
    },
    reducers : {
      increment: (state) => {
        state.count += 10
      }
    },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export default counterSlice.reducer