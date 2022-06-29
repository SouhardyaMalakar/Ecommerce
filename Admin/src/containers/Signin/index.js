import {React, useState, useEffect} from 'react'
import{useDispatch, useSelector} from 'react-redux';
import Layout from '../../components/Layout'
import Input from "../../components/UI/input"
import {login} from '../../actions/auth.action'
import { Form, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router';

export default function Signin(props) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();



    const userLogin = (e) =>{
        e.preventDefault();

        const user ={
            email,password
        }
        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to ={`/`} />
    }

    return (
        <div>
            <Layout>
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Jumbotron style={{ margin: "1rem", background: "#1f1f1f", color: "wheat" }} className="text-center">
                                <Form onSubmit={userLogin}>
                                    <Input
                                        label="Email address"
                                        placeholder="Enter email"
                                        value={email}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <Input
                                        label="Password"
                                        placeholder="Password"
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
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


