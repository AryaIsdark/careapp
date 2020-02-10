import React from 'react'
import { Modal, Drawer } from 'antd'

interface Props {
    match: any
}

const Booking = ({match}: Props) => {

    return (
        <Drawer visible={true} >
            <div>
                Booking
            </div>
        </Drawer>
        )
}

export default Booking