import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isLoading:false,
    data:[],
    error:''
}

const mobilesSlice = createSlice({
    name:'mobiles',
    initialState,
    reducers:{
        getMobilesDataRequest(state, action){
            state.isLoading = true 
        },
        getMobilesDataSuccess(state, action){
            console.log(action)
            state.isLoading = false
            state.data = action.payload
        },
        getMobilesDataFail(state, action){
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {getMobilesDataRequest, getMobilesDataSuccess, getMobilesDataFail}  = mobilesSlice.actions

export default mobilesSlice.reducer