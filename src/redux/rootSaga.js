import {all, fork} from 'redux-saga/effects'

import mobilesSaga from './sagas/mobilesSaga'

const sagas = [mobilesSaga]

function* rootSaga(){
    yield all(sagas.map((saga) => fork(saga)));
}

export default rootSaga