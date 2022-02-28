import {createSlice} from '@reduxjs/toolkit'

const initialState={
    count:0
}

const counterSlice= createSlice({
    name: 'counter',
    initialState,
    reducers:{
        countIncrement(state, action){
            state.count = state.count + 1
        },
        countDecrement(state, action){
            state.count = state.count - 1
        },
        countIncrementNumber(state, action){
            state.count = state.count + Number(action.payload)
        },
        countDecrementNumber(state, action){
            state.count = state.count - Number(action.payload)
        }
    }
})

export const {countIncrement, countDecrement, countIncrementNumber, countDecrementNumber} = counterSlice.actions

export default counterSlice.reducer