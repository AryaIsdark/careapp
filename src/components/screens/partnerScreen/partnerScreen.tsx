import React from 'react'
import { Route } from 'react-router-dom'
import Booking from 'components/booking/booking'

interface Props {
    match: {
        params: any
    }
}

const PartnerProfileScreen = ({ match }: Props) => {
    const {partnerId, productId } = match.params

    return (
        <div className={'partner-profile-page'} >
            Partner - {partnerId} , Product : {productId}

            <Route
                path={`/partners/:partnerId/book/:productId`}
                render={(props) => (
                    <Booking {...props} />
                )}
            />
        </div>)
}

export default PartnerProfileScreen