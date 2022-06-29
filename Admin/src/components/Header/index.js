import React from 'react'
import { Jumbotron, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <Container fluid>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex:1}}>   
            {/* <Navbar.Brand href="#home">Admin Dashbord</Navbar.Brand> */}
            <Link to="/" className="navbar-brand">                                                     
            Admin Dashbord
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
                </Nav>
                <Nav>
                    <li>
                    <NavLink to="Signin" className ="nav-link">SignIn</NavLink>
                    </li>
                    <li>
                    <NavLink to="Signup" className ="nav-link">SignUp</NavLink>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>

    )
}
