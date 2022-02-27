import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMobilesDataRequest} from '../../redux/slices/getMobilesDataSlice'

function Index() {
    const dispatch = useDispatch()
    const state = useSelector( state => state.mobilesData)
    useEffect(()=>{
        dispatch(getMobilesDataRequest())
    },[])
    console.log(state)
    return (
        <div>
            Mobiles page
        </div>
    )
}

export default Index
