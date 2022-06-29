import React from 'react'
import Layout from '../../components/Layout'
import{ useSelector} from 'react-redux';
import{Form,Button,Jumbotron, Container, Row, Col} from 'react-bootstrap'
import Input from "../../components/UI/input"
import { Redirect } from 'react-router';

export default function Signup() {
    const auth = useSelector(state => state.auth);
    if(auth.authenticate){
        return <Redirect to ={`/`} />
    }
    return (
        <div >
            <Layout>
                <Container>
                    <Row>
                        <Col md={{span:8,offset:2}}>
                            <Jumbotron style={{ margin: "1rem", background: "#1f1f1f", color: "wheat" }} className="text-center">
                                <Form>
                                    <Row>
                                        <Col>
                                        <Input
                                        label ="FirstName"
                                        placeholder="FirstName"
                                        value=""
                                        type="text"
                                        onChange={() =>{}}
                                        />
                                        
                                        </Col>
                                        <Col>
                                        <Input
                                        label ="LastName"
                                        placeholder="LastName"
                                        value=""
                                        type="text"
                                        onChange={() =>{}}
                                        />
                                        </Col>
                                    </Row>
                                    <Input
                                        label ="Email address"
                                        placeholder="Enter email"
                                        value=""
                                        type="email"
                                        onChange={() =>{}}
                                        />

                                    <Input
                                        label ="Password"
                                        placeholder="Password"
                                        value=""
                                        type="password"
                                        onChange={() =>{}}
                                        />
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </Jumbotron>
                        </Col>

                    </Row>
                </Container>
            </Layout>
            
        
        </div>
    )
}
