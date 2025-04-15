import React, { useState } from "react";
import { Container, Form, Button, Tab, Nav, Row, Col } from "react-bootstrap";

const LoginSignup = () => {
  const [activeKey, setActiveKey] = useState("login");

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold text-danger">Login / Signup</h2>
      <Tab.Container id="login-signup-tabs" activeKey={activeKey} onSelect={setActiveKey}>
        <Row>
          <Col md={4} className="offset-md-4">
            <Nav variant="tabs" className="justify-content-center mb-4">
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="signup">Signup</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                  </Form.Group>
                  <Button variant="danger" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
              </Tab.Pane>

              <Tab.Pane eventKey="signup">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Create a password" />
                  </Form.Group>
                  <Button variant="danger" type="submit" className="w-100">
                    Sign Up
                  </Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default LoginSignup;
