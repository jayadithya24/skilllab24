import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Checkout = () => {
  const cartItems = [
    { name: "Gadbad", price: 120 },
    { name: "Pabbas Special", price: 150 },
  ];
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">Checkout</h2>
      <Row>
        <Col md={8}>
          <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
              <h5>Billing Information</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5>Order Summary</h5>
              {cartItems.map((item, idx) => (
                <Row key={idx} className="mb-3">
                  <Col>{item.name}</Col>
                  <Col className="text-end">₹{item.price}</Col>
                </Row>
              ))}
              <Row className="fw-bold">
                <Col>Total</Col>
                <Col className="text-end">₹{total}</Col>
              </Row>
              <Button variant="danger" className="mt-3 w-100">Proceed to Payment</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
