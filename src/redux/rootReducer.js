import {combineReducers} from 'redux'

import MobilesReducer from './slices/getMobilesDataSlice'

const rootReducer = combineReducers({
    mobilesData : MobilesReducer
})

export default rootReducer
