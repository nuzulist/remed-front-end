import React from 'react'
import Axios from 'axios'

import { Form, Button } from 'react-bootstrap'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }

    onLogin = () => {
        let email = this.refs.email.value
        let password = this.refs.password.value

        
    }

    render() {
        return (
            <div>
                <div style={{ width: '30vw' }}>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                ref="email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref="password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </div>
            </div >
        )
    }
}


export default LoginPage