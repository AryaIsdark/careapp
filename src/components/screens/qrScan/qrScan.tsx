import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import QrReader from 'react-qr-reader'
import * as api from 'api/apiFunctions'
import { Alert } from 'antd';

const QRScan = () => {
    const { t } = useTranslation();
    const [hasScannedData, setHasScannedData] = useState(false)
    const [isScanning, setIsScanning] = useState(false)
    const [isValid, setIsValid] = useState(false) 
    const [showValidationError, setShowValidationError]= useState(false)
    const resetValidation = () => {
        setIsValid(false)
        setShowValidationError(false)
    }
    const handleError = (error: any) => console.log(error)
    const handleScan = async(data: any) => {
        console.log(data)
        if(data !== null){
            setHasScannedData(true)
            try{
                const response : any = await api.canPurchase(data)
                if(response && response.data === true) {
                    setIsValid(true)
                }
                else{
                    setShowValidationError(true)
                }
            }
            catch(error) {
                alert('something went wrong')
            }
        }
    }

    return (
       <>
       
       {isValid && <Alert type={'success'} message={'Proccess was succesful'}></Alert>}
       {showValidationError && <Alert type={'error'} message={'User has no valid ticket'}></Alert>}
       {!isValid && <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />}
       </>
    )
}

export default QRScan
