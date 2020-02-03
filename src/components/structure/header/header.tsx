import React from 'react'
import { Layout, Avatar, Progress, Divider } from 'antd'


const { Header } = Layout

interface Props {
    userInfo: any,
    bookingInfo: any
}



const AppHeader = ({ userInfo, bookingInfo }: Props) => {
    return (
        <Header>
            <div style={{ textAlign: 'right' }}>
                <Progress
                    width={50}
                    type={'circle'}
                    percent={25}
                    format={() => `${bookingInfo.totalBookingsThisMonth}/${bookingInfo.totalBookingsThisMonth + bookingInfo.remaining}`} />

                <Divider type={'vertical'} />
                <Avatar style={{ backgroundColor: '#006cab', verticalAlign: 'middle', width:'50px', height:'50px', lineHeight:'3.5' }} size="large">
                    {userInfo.initials}
                </Avatar>
            </div>
        </Header>
    )
}

export default AppHeader