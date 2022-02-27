import { put, call, takeLatest } from "@redux-saga/core/effects"

import {getMobilesDataRequest, getMobilesDataSuccess, getMobilesDataFail} from '../slices/getMobilesDataSlice'
import MobilesService from "../services/mobiles"

const mobilesService = new MobilesService()

function* getMobilesDataWorker(action){
    try{
        const res = yield call(mobilesService.getMobilesDataApi, action.payload)
        console.log(res)
        if(res.status === 200){
            yield put(getMobilesDataSuccess(res.data))
        }
    }catch(e){
        yield put(getMobilesDataFail(e.message))
    }
}


export default function* mobilesSaga(){
    yield takeLatest(getMobilesDataRequest.type, getMobilesDataWorker)
}