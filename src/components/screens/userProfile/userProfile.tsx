import React from 'react'
import { Avatar, Progress, Divider, Descriptions, Card, Button } from 'antd'
import { useSelector } from 'react-redux'
import * as meSelectors from 'store/me/selectors'


const UserProfile = () => {
    const { userInfo, bookingInfo, packageInfo } = useSelector(meSelectors.data)
    return (
        <>
            <Card >
                <Descriptions>
                    <Descriptions.Item label="Name">{userInfo.name} {userInfo.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Subscription">{packageInfo.name} User</Descriptions.Item>
                    <Descriptions.Item label="Live">Copenhagen</Descriptions.Item>
                    <Descriptions.Item label="Address">Frederiksdalsvej 12c</Descriptions.Item>
                </Descriptions>
            </Card>
            <br />
            <Card style={{ textAlign: 'center' }}>
                <Progress
                    width={300}
                    type={'circle'}
                    percent={25}
                    format={() => `${bookingInfo.totalBookingsThisMonth}/${bookingInfo.totalBookingsThisMonth + bookingInfo.remaining}`} />

                <Divider type={'vertical'} />
                <Descriptions>
                    <Descriptions.Item label="Total bookings this month">{bookingInfo.totalBookingsThisMonth} {userInfo.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Remaining tickets for this month">{packageInfo.name}</Descriptions.Item>
                </Descriptions>
                <Button size={'large'} type={'ghost'} title={'Buy extra ticket'}>Buy extra ticket</Button>
                <Divider type={'vertical'}></Divider>
                <Button size={'large'} type={'primary'} title={'Change Plan'}>Change Plan</Button>
            </Card>
        </>
    )
}

export default UserProfile