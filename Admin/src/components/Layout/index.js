import React from 'react'
import Header from '../Header'
import  {Container } from 'react-bootstrap'

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            {/* <Container>
            
            </Container>
         */}
        </>
    )
}

export default Layout
