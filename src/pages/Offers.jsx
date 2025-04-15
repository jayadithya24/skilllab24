import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const Offers = () => {
  const offers = [
    { title: "Buy 1 Get 1 Free", description: "Get a free ice cream of equal or lesser value on purchasing one.", expiry: "Valid till April 30, 2025" },
    { title: "20% Off on All Orders", description: "Use code 'ICECREAM20' for a 20% discount on your next order.", expiry: "Valid till May 15, 2025" },
    { title: "Free Delivery on Orders Over ₹500", description: "Get free delivery on all orders above ₹500.", expiry: "Valid till June 10, 2025" }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold text-danger">🍦 Special Offers</h2>
      <Row>
        {offers.map((offer, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold">{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Text className="text-muted">{offer.expiry}</Card.Text>
                <Button variant="danger" size="sm">Claim Offer</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
