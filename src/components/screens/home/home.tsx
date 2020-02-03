import React from 'react'
import { Card } from 'antd'
import RecentBookings from 'components/modules/recentBookings/recentBookings'
import SubscriptionDetails from 'components/modules/subscriptionDetails/scubscriptionDetails'
import { Input, Empty } from 'antd';
import history from 'router/history'

const { Search } = Input;

const HomeScreen = () => {

    const handleSearch = (value: string) => {
        history.push('/area/' + value)
    }

    return (
        <div className={'d-flex'}>
            <div className={'search-container'}>
                <div className={'search-box'} >
                    <Search
                        placeholder="Type your area code to start..."
                        size={'large'}
                        onSearch={handleSearch}
                        enterButton />

                </div>
            </div>
            <Card
                bordered={false}
                title={'Your bookings this month'}
                style={{ width: 400 }}
                cover={<img alt="example" width={'200'} src="https://ayria.club/images/bg/Galaxy_02.jpg" />}
                className={'item box-shadow-md'}>
                <RecentBookings />
            </Card>
            <Card
                bordered={false}
                title={'Your subscription'}
                style={{ width: 400 }}
                cover={<img alt="example" width={'200'} src="https://ayria.club/images/bg/Gold_02.jpg" />}
                className={'item box-shadow-md'}>
                <SubscriptionDetails />
            </Card>
            <Card
                bordered={false}
                title={'Your wishlist'}
                style={{ width: 400 }}
                cover={<img alt="example" width={'200'} src="https://ayria.club/images/bg/Star_02.png" />}
                className={'item box-shadow-md'}>
                <Empty>You don't have any wishes yet</Empty>
            </Card>
        </div>)
}

export default HomeScreen