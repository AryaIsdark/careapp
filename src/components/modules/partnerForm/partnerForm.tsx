import React, { useState } from 'react'
import { Form, Input, Result, Button, Spin, Divider, notification } from 'antd'
import history from 'router/history'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from 'store/partners/actions'
import * as selectors from 'store/partners/selectors'
import './partnerForm.css'
import { Link } from 'react-router-dom'

const SuccessResult = ({ title }: any) => <Result
    status="success"
    title={title}
    extra={[
        <Button type="primary" key="console">
            Make another partner
        </Button>
    ]}
/>


interface Props {
    match: {
        params: any
    }
    backUrl: string
}

const PartnerForm = ({ match, backUrl }: Props) => {

    const { t } = useTranslation()
    const { id } = match.params
    const isLoading = useSelector(selectors.isLoading)
    const [formData, setFormData] = useState();
    const dispatch = useDispatch()

    

    const handleSubmit = async() => {
        if (id === 'create') {
            try{
                await dispatch(actions.createData(formData))
                notification.success({message: `${formData.name} was added` })
                history.replace(backUrl)
            }
            catch{
                notification.error({message: `There has been a problem trying to add partner` })
            }
        }
        else {
            notification.info({message: `Update function is under construction` })
        }
    }

    const handleOnBlur = (event: any) => {
        const { id, value } = event.target
        setFormData({ ...formData, [id]: value })
    }

    return (
        <Spin spinning={isLoading} >
            <>
                <Link to={backUrl}>{t('misc.back')}</Link>
                <Divider orientation={'left'} />
                <Form name="partner-form"  >
                    <div id={'partner-form'}>
                        <Form.Item label={t('label.cvr')} required >
                            <Input name={'regNo'} id={'regNo'} onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item label={t('label.partnerName')} required >
                            <Input name={'name'} id={'name'} onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item label={t('label.address')} required >
                            <Input name={'address'} id={'address'} onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item label={t('label.postal')} required >
                            <Input name={'postal'} id={'postal'} onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item label={t('label.contactPerson')} required>
                            <Input name={'contactPerson'} id={'contactPerson'} onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item label="Email" required>
                            <Input name={'email'} id={'email'} onBlur={handleOnBlur} />
                        </Form.Item>
                        <Form.Item label="Website">
                            <Input name={'website'} id={'website'} onBlur={handleOnBlur} />
                        </Form.Item>
                    </div>
                    <Divider />
                    <div style={{ textAlign: 'right' }}>
                        <Button type={'primary'} onClick={handleSubmit}>{t('misc.submit')}</Button>
                    </div>
                </Form>
            </>

        </Spin>
    )
}

export default PartnerForm