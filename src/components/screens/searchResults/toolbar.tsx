import React from 'react'
import { Select } from 'antd'

import * as actions from 'store/searchResults/actions'
import { useDispatch } from 'react-redux'
const { Option } = Select;

const SortOptions = () => {
    const distpatch = useDispatch()
    const handleOnChange = (value: string) => distpatch(actions.loadData({ sortBy: value }))
    return (
        <label>
            <span>Sorting </span>
            <Select
                showSearch
                defaultValue={'distance'}
                style={{ width: 200 }}
                onChange={handleOnChange}

            >
                <Option value="distance">Distance</Option>
                <Option value="rating">Rating</Option>
                <Option value="name">Name</Option>
            </Select>
        </label>
    )
}

const Toolbar = () => {
    return (
        <div className={'search-result-toolbar'}>
            
            <div className={'item'} style={{ textAlign: 'right' }}>
                <SortOptions></SortOptions>
            </div>
        </div>
    )
}



export default Toolbar
