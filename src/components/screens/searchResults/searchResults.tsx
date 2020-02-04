import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from 'store/searchResults/actions'
import * as selectors from 'store/searchResults/selectors'
import Partners from 'components/modules/partners/partners'

const SearchResultScreen = ({ match }: any) => {
    
    const { areaCode } = match.params
    const data = useSelector(selectors.data)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actions.loadData({areaCode}))
    },[dispatch, areaCode])

    return (
        <div className={'d-flex'}>
            <div className={'item'} style={{width:'20%'}}>
                [SIDEBAR-CONTENT]
            </div>
            <div className={'item'} style={{width:'70%'}}>
                <Partners data={data}></Partners>
            </div>
        </div>
    )
}

export default SearchResultScreen