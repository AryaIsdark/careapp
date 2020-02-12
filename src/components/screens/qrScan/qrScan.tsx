import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import QrReader from 'react-qr-reader'
import * as api from 'api/apiFunctions'
import { Alert, Input, Icon } from 'antd';
import history from 'router/history'

const {Search} = Input

const QRScan = () => {
    const { t } = useTranslation();
    const [isValid, setIsValid] = useState(false)
    const [showValidationError, setShowValidationError] = useState(false)
    const [hasError, setHasError] = useState(false)

    const resetValidation = () => {
        setIsValid(false)
        setShowValidationError(false)
    }

    const handleError = (error: any) => setHasError(true)

    const processCode = async (data: string) => {
        resetValidation()
        if (data) {
            try {
                const response: any = await api.canPurchase(data)
                if (response && response.data === true) {
                    setIsValid(true)
                    history.push(`/qr/confirmPurchase/${data}`)
                }
                else {
                    setShowValidationError(true)
                }
            }
            catch (error) {
                alert('something went wrong')
            }
        }
    }

    const handleScan = (data: any) => data !== null && processCode(data)
    const handleInputOnchange = (data: string) =>  processCode(data) 
    

    return (
        <>
            {!hasError &&<QrReader
                delay={300}
                onError={handleError}
                facingMode={'environment'}
                onScan={handleScan}
                style={{ width: '100%' }}
            />}
            {hasError &&
                <>
                    <p>We couldn't reach your camera</p>
                    <Search
                        style={{ width: 300 }}
                        size={'large'}
                        enterButton={true}
                        onSearch={handleInputOnchange}
                        prefix={<Icon type="qrcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder={'Enter code manually'} />
                </>
            }
            {isValid && <Alert type={'success'} message={'Proccess was succesful'}></Alert>}
            {showValidationError && <Alert type={'error'} message={'User has no valid ticket'}></Alert>}
        </>
    )

}
export default QRScan
