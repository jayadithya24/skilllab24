import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt, FaPhoneAlt } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4 py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-danger fs-2">
          Pabbas Café
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="nav-link-hover px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link-hover px-3">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/offers" className="nav-link-hover px-3">
              Offers
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className="nav-link-hover px-3">
              <FaShoppingCart className="me-1" />
              Cart
            </Nav.Link>

            <Nav.Link as={Link} to="/profile" className="nav-link-hover px-3">
              <FaUserAlt className="me-1" />
              Profile
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="nav-link-hover px-3">
              <FaPhoneAlt className="me-1" />
              Contact Us
            </Nav.Link>

            <NavDropdown title="More" id="navbarScrollingDropdown" align="end" className="px-3">
              <NavDropdown.Item as={Link} to="/admin">
                Admin Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">
                Login / Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default MyNavbar;
