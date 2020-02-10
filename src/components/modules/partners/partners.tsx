import React from 'react'
import { useTranslation } from 'react-i18next'
import { Spin, Divider } from 'antd'
import { Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from 'store/searchResults/selectors'
import StarRatingComponent from 'react-star-rating-component';
import Booking from 'components/booking/booking';

interface Props {
    data: any
    match: any
}

const Partners = ({ data, match }: Props) => {
    const { t } = useTranslation();
    const isLoading = useSelector(selectors.isLoading)

    return (
        <>
            <Spin spinning={isLoading}>
                <div className={'partners'}>
                    {data.map((partner: any) =>
                        <div className={'partners-item'}>
                            <div className={'partner-item-head'}>
                                <div>{partner.name}</div>
                                <div><StarRatingComponent name={'name'} value={partner.rating} editing={false} /></div>
                            </div>
                            <img alt="example" width={'100%'} src={partner.logo} />
                            <Link to={`/partners/${partner.id}`}>See</Link>
                            <Divider type={'vertical'}></Divider>
                            <Link to={`/book/${partner.id}`}>Book Now</Link>
                        </div>
                    )}
                </div>
            </Spin>
            
        </>
    )
}

export default Partners
