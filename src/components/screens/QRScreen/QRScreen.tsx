import React from 'react'
import * as selectors from 'store/me/selectors'
import { useSelector } from 'react-redux'
import QRCode from 'qrcode.react'
import QRScan from '../qrScan/qrScan'
import { Spin } from 'antd'
import { Route } from 'react-router-dom'
import ConfirmPurchase from './confirmPurchase'

const QRScreen = () => {

    const { userInfo } = useSelector(selectors.data)

    const isLoading = useSelector(selectors.isLoading)
    const isPartnerUser = useSelector(selectors.isMerchant)

    return (

        <div className={'qr-content'}>
            {isPartnerUser ? <QRScan /> : <QRCode fgColor={'#006cab'} size={300} value={userInfo.userName} />}
            <Route
                path={`/qr/confirmPurchase/:userId`}
                render={(props) => (
                    <ConfirmPurchase {...props}/>
                )}
            />
        </div>

    )
}

export default QRScreen