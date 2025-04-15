import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const sampleMenu = [
  { name: "Gadbad", description: "Layered sundae with fruits, jelly, and ice cream.", price: 120 },
  { name: "Pabbas Special", description: "Loaded with dry fruits and creamy delight.", price: 150 },
  { name: "Tiramisu Delight", description: "Coffee and cream based Italian-inspired dessert.", price: 140 },
  { name: "Chocolate Overload", description: "Chocolate ice cream with brownie chunks and choco chips.", price: 130 },
];

const Menu = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold text-danger">🍨 Our Signature Menu</h2>
      <Row className="g-4">
        {sampleMenu.map((item, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{item.name}</Card.Title>
                <Card.Text className="text-muted mb-2">{item.description}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="text-success fw-semibold fs-5">₹{item.price}</span>
                  <Button variant="outline-danger" size="sm">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
