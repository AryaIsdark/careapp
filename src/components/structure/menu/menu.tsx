import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    userInfo: any,
}

const AppMenu = ({ userInfo }: Props) => {
    return (
        <div className={'menu'}>
            <div className={'menu-item'}>
                <Link to={'home'}>Home</Link>
            </div>
            <div className={'menu-item'}>
                <Link to={'profile'}>Profile</Link>
            </div>
            <div className={'menu-item'}>
                <Link to={'qr'}>Scan</Link>
            </div>
            <div className={'menu-item'}>
                <Link to={'settings'}>Settings</Link>
            </div>
        </div>
    )
}

export default AppMenu