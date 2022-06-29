import React from 'react'
import { Jumbotron, Navbar, Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css' 

export default function Home() {
    return (
        <div>
           <Layout>
        <Container fluid>
            <Col md={2} className= "sidebar">Side bar</Col>
            <Col md={10} style={{ marginLeft:'auto'}}> Container</Col>
            <Row>
            </Row>
        </Container>

               {/* <Jumbotron style ={{margin :"5rem", background : "#1f1f1f", color:"wheat", padding:"1em"}} className="text-center">
            <h3> Welcome to Admin Dashbord</h3>
            <p>
                
            </p>
            </Jumbotron> */}
           </Layout>
        </div>
    )
}
