import {endpoints} from '../constants/mobiles'
import request from '../../axios/service'

export default class MobilesService {
    getMobilesDataApi(payload){
        return request.get(endpoints.GET_MOBILES_DATA, payload)
    }
}