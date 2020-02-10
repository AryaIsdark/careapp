import React, { useState } from 'react'
import { Modal } from 'antd'

interface Props {
    match: {
        params: any
    }
}

const ConfirmPurchase = ({ match }: Props) => {

    const { userId } = match.params
    const [visible, setVisible] = useState(true)

    const handleOnClose = () => setVisible(false)
    const handleOnOkClick = () => console.log('ok was click')        
    
    return (
        <Modal closable onCancel={handleOnClose} okText={'Confirm Purchase'} onOk={handleOnOkClick} visible={visible} >
            Are you sure you want to make the purchase ? {userId}
        </Modal>
    )
}

export default ConfirmPurchase