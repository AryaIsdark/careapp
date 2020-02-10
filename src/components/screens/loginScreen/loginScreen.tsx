import React, { useState } from 'react'
import { Spin, Form, Input, Icon, Button } from 'antd'
import {useDispatch} from 'react-redux'
import * as meActions from 'store/me/actions'

const LoginScreen = () => {
    const [isLoading, seIsLoading] = useState(false)
    const [userName, setUserName] = useState('User1')
    const dispatch = useDispatch()
    const handleOnBlur = (event: any) => setUserName(event.target.value)

    const handleSubmit = (event: any) => {
        event.preventDefault()
        dispatch(meActions.loadData(userName))
    }

    return (
        <Spin spinning={isLoading} wrapperClassName={'login-content'}>
            <div >
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                        value={userName}
                            onBlur={handleOnBlur}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Spin>
    )
}

export default LoginScreen