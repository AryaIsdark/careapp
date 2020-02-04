import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, List, Spin } from 'antd'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from 'store/searchResults/selectors'
import StarRatingComponent from 'react-star-rating-component';

interface Props {
    data: any
}

const Partners = ({ data }: Props) => {
    const { t } = useTranslation();
    const isLoading = useSelector(selectors.isLoading)

    return (
        <Spin spinning={isLoading}> 
            <div className={'partners'}>
                {data.map((partner: any) =>
                    <div className={'partners-item'}>
                        <div className={'partner-item-head'}>
                            <div>{partner.name}</div>
                            <div><StarRatingComponent name={'name'} value={partner.rating} editing={false} /></div>
                        </div>
                        <img alt="example" width={'100%'} src={partner.logo} />
                    </div>
                )}

            </div>
        </Spin>
    )
}

export default Partners
