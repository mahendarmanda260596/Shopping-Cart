import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const NavBar = () => {

    const cartProducts = useSelector(state => state.cart) //slice mentioned cart so given that ensure that
    // this cartProducts returns all the products


    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Keerthi Shopping App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>

                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link}>My Cart {cartProducts.length}</Nav.Link>

                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
