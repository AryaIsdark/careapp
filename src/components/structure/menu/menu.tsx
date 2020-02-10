import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

interface Props {
    userInfo: any,
}

const AppMenu = ({ userInfo }: Props) => {
    return (
        <div className={'menu'}>
            <div className={'menu-item'}>
                <Link to={'/'}>
                    <Icon type="home" />
                </Link>
            </div>
            <div className={'menu-item'}>
                <Link to={'/profile'}>
                    <Icon type="user" />
                </Link>
            </div>
            <div className={'menu-item'}>
                <Link to={'/qr'}>
                    <Icon type="qrcode" />
                </Link>
            </div>
            <div className={'menu-item'}>
                <Link to={'/settings'}>
                    <Icon type="setting" />
                </Link>
            </div>
        </div>
    )
}

export default AppMenu