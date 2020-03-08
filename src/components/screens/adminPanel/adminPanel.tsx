import React, { useEffect } from 'react'
import Partners from 'components/modules/partners/partners'
import { useSelector, useDispatch } from 'react-redux'
import * as selectors from 'store/partners/selectors'
import * as actions from 'store/partners/actions'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'
import { useTranslation } from 'react-i18next'



const AdminPanel = () => {
    const {t} = useTranslation()
    const disptach = useDispatch()
    const partners = useSelector(selectors.data)

    useEffect(() => {
        disptach(actions.loadData({}))
    }, [disptach])

    return (
        <>
            <Link to={'/admin-panel/partners/create'} >{t('misc.new')}</Link>
            <Divider/>
            <Partners data={partners} />
        </>
    )
}

export default AdminPanel