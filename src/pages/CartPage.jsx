import React from "react";
import { Container, ListGroup, Alert, Button, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const CartPage = () => {
  const cartItems = []; 
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <Alert variant="info" className="text-center">
          <FaShoppingCart className="me-2" />
          Your cart is empty. Add something yummy from the <Alert.Link href="/menu">menu</Alert.Link>!
        </Alert>
      ) : (
        <>
          <ListGroup className="mb-4">
            {cartItems.map((item, idx) => (
              <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <small className="text-muted">{item.description}</small>
                </div>
                <span className="text-danger fw-bold">₹{item.price}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Row className="justify-content-end">
            <Col md={4} className="text-end">
              <h5>Total: <span className="text-success">₹{total}</span></h5>
              <Button variant="success" className="mt-2 w-100">Proceed to Checkout</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default CartPage;
