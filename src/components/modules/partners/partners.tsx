import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from 'antd'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from 'store/searchResults/selectors'
import StarRatingComponent from 'react-star-rating-component';

interface Props {
    data: any
}

const Partners = ({data }: Props) => {
    const { t } = useTranslation();
    const isLoading = useSelector(selectors.isLoading)

    return (
        <>
            <div className={'d-flex '}>
                {
                    data.map((partner: any) =>
                        <Card
                            className={'item'}
                            bordered={false}
                            loading={isLoading}
                            title={partner.name}
                            cover={<img alt="example" width={'200'} src={partner.logo}/>}
                            extra={<StarRatingComponent name={'name'} value={partner.rating}  editing={false}/>}
                            style={{ width: 350 }}>
                            <p>{partner.categories}</p>
                            <Link to={`/partners/${partner.id}`} >{t('misc.more')}</Link>
                        </Card>
                    )
                }
            </div>
        </>
    )
}

export default Partners