import React from 'react'
import { Empty, Tag, List, Skeleton } from 'antd'
import { useSelector } from 'react-redux'
import * as meSelectors from 'store/me/selectors'

const RecentBookings = () => {
    const { bookingInfo } = useSelector(meSelectors.data)
    const isLoading = useSelector(meSelectors.isLoading)
    const { recentBookings } = bookingInfo

    return (
        <Skeleton loading={isLoading}>
            {recentBookings.length ? recentBookings.map((element: any) =>
                (
                    <List>
                        <List.Item
                            actions={[<a key="rate">Rate</a>, <a key="see">see</a>]}
                        ><Tag color={'blue'}>{element.date}</Tag> {element.title} </List.Item>
                    </List>)
            )
                : <Empty>You haven't made any bookings this month</Empty>
            }
        </Skeleton>
    )
}

export default RecentBookings