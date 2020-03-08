import React, { useState, useEffect } from 'react'
import { Checkbox, Divider } from 'antd'
import { useDispatch } from 'react-redux'
import * as actions from 'store/partners/actions'

const CategoriesFilter = () => {
    const dispatch = useDispatch()
    const initialCategories = [
        { title: 'massage', isChecked: false },
        { title: 'sport', isChecked: false },
        { title: 'food', isChecked: false },
        { title: 'family', isChecked: false },
    ]

    const [isAllChecked, setIsAllChecked] = useState(true)
    const [categories, setCategories] = useState(initialCategories)

    const uncheckAll = () => {
        setCategories(initialCategories)
    }

    const handleOnChange = (event: any) => {
        setIsAllChecked(false)
        const category = event.target.value
        category.isChecked = !category.isChecked
        setCategories([...categories])
    }

    const handleOnCheckAllChange = (value: any) => {
        uncheckAll()
        setIsAllChecked(!isAllChecked)
    }

    useEffect(() => {
        const selectedCategories = categories.filter((category: any) => category.isChecked).map((category: any) => category.title)
        dispatch(actions.loadData({ categories: selectedCategories }))
    }, [categories, dispatch])

    return (
        <>
            <Checkbox
                onChange={handleOnCheckAllChange}
                checked={isAllChecked}
            >
                All
          </Checkbox>
            <Divider />

            {categories.map((category: any) =>
                <div>
                    <Checkbox
                        onChange={handleOnChange}
                        value={category}
                        checked={category.isChecked}
                    >{category.title}</Checkbox>
                </div>
            )}
        </>
    )
}

export default CategoriesFilter
