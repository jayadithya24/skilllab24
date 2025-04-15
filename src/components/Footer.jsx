import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Pabbas Ice Cream Café</h5>
            <p>Enjoy the finest ice cream in Mangalore with a variety of delicious options!</p>
          </Col>
          
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/menu" className="text-white">Menu</Nav.Link>
              <Nav.Link href="/offers" className="text-white">Offers</Nav.Link>
              <Nav.Link href="/contact" className="text-white">Contact Us</Nav.Link>
            </Nav>
          </Col>
          
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaInstagram size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaTwitter size={30} />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 Pabbas Ice Cream Café. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
