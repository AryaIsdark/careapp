import React from 'react'
import { Avatar, Progress, Divider, Descriptions, Card } from 'antd'
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
                <Avatar style={{ backgroundColor: '#006cab', verticalAlign: 'middle', width: '50px', height: '50px', lineHeight: '3.5' }} size="large">
                    {userInfo.initials}
                </Avatar>
                <Descriptions>
                    <Descriptions.Item label="Total bookings this month">{bookingInfo.totalBookingsThisMonth} {userInfo.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Remaining tickets for this month">{packageInfo.name}</Descriptions.Item>
                </Descriptions>
            </Card>
        </>
    )
}

export default UserProfile