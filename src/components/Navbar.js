// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Ideal Café</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/offers">Offers</Nav.Link>
                    <Nav.Link href="/locations">Locations</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                    <Nav.Link href="/signin">Sign In</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    <FaShoppingCart />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;