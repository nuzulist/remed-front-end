import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar fixed='top' expand="lg" bg="dark" variant="dark"
                style={{ height: '8vh', padding: '0 2rem', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Navbar.Brand href="#home">uStore</Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto">
                        <NavDropdown title="username">
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
            </Navbar>
        )
    }
}

export default NavigationBar