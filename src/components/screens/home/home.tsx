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
        <div className={'home-page'} >
            <div className={'item search-container'}>
                <div className={'search-box'} >
                    <Search
                        placeholder="Type your area code to start..."
                        size={'large'}
                        onSearch={handleSearch}
                        enterButton />

                </div>
            </div>
            <div className={'item subscription-box'}>
                <Card
                    bordered={false}
                    title={'Your bookings this month'}
                    style={{ width: 400 }}
                    cover={<img alt="example" width={'200'} src="https://ayria.club/images/bg/Galaxy_02.jpg" />}
                    >
                    <RecentBookings />
                </Card>
                <Card
                    bordered={false}
                    title={'Your subscription'}
                    style={{ width: 400 }}
                    cover={<img alt="example" width={'200'} src="https://ayria.club/images/bg/Gold_02.jpg" />}
                   >
                    <SubscriptionDetails />
                </Card>
                <Card
                    bordered={false}
                    title={'Your wishlist'}
                    style={{ width: 400 }}
                    cover={<img alt="example" width={'200'} src="https://ayria.club/images/bg/Star_02.png" />}
                    >
                    <Empty>You don't have any wishes yet</Empty>
                </Card>
            </div>
        </div>)
}

export default HomeScreen