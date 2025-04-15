// src/pages/AdminDashboard.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Manage Menu</Card.Title>
              <Card.Text>Update the menu, add new items, and manage prices.</Card.Text>
              <Button variant="primary">Go to Menu Management</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>View Orders</Card.Title>
              <Card.Text>Track customer orders, view past orders, and manage deliveries.</Card.Text>
              <Button variant="primary">Go to Orders</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Manage Users</Card.Title>
              <Card.Text>View customer profiles and manage their information.</Card.Text>
              <Button variant="primary">Go to User Management</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
