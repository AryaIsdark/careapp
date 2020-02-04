import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from 'store/searchResults/actions'
import * as selectors from 'store/searchResults/selectors'
import Partners from 'components/modules/partners/partners'
import CategoriesFilter from 'components/modules/categoriesFilter/categoriesFilter'
import { Card } from 'antd'
import Toolbar from './toolbar'

const SearchResultScreen = ({ match }: any) => {

    const { areaCode } = match.params
    const data = useSelector(selectors.data)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.loadData({ areaCode: areaCode }))
    }, [dispatch, areaCode])

    return (
        <div className={'search-page'}>
            <div className={'search-sidebar'} style={{ width: '20%', padding: '20px' }}>
            <div className={'search-count'}>
                Now showing {data.length} partners
            </div>
                <Card  bordered={true} title={'Categories'}>
                    <CategoriesFilter />
                </Card>
            </div>
            <div className={'search-result-content'} style={{ width: '60%', padding: '20px' }}>
                <Toolbar/>
                <Partners data={data}></Partners>
            </div>
        </div>
    )
}

export default SearchResultScreen