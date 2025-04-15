import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold text-danger">Contact Us</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
        </Form.Group>
        <Button variant="danger" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
