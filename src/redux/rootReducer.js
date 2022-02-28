import {combineReducers} from 'redux'

import MobilesReducer from './slices/getMobilesDataSlice'
import counterReducer from './slices/counterSlice'

const rootReducer = combineReducers({
    mobilesData : MobilesReducer,
    count : counterReducer
})

export default rootReducer
