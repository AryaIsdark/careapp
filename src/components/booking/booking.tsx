import React, { useState } from 'react'
import { Modal } from 'antd'

interface Props {
    match: {
        params: any
    }
}

const Booking = ({ match }: Props) => {

    const { productId, partnerId } = match.params
    const [visible, setVisible] = useState(true)

    const handleOnClose = () => setVisible(false)
    const handleOnOkClick = () => console.log('ok was click')        
    
    return (
        <Modal closable onCancel={handleOnClose} onOk={handleOnOkClick} visible={visible} >
            partner : {partnerId} product : {productId}
            <div>
                Booking
            </div>
        </Modal>
    )
}

export default Booking