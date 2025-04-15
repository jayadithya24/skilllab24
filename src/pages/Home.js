import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to Pabbas Ice Cream Café</h1>
          <p className="lead mb-4">Indulge in legendary sundaes, cool treats, and cozy vibes in the heart of Mangalore.</p>
          <Button as={Link} to="/menu" variant="danger" size="lg">
            🍨 Explore Our Menu
          </Button>
        </Container>
      </div>

      {/* Carousel Section */}
      <Carousel className="mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/whimsical-neapolitan-summer-ice-cream-cone-carousel_1106454-30393.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fresh Flavors Await</h3>
            <p>Try our wide range of ice cream made with the finest ingredients.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/ice-cream-cone-held-against-vintage-carnival-carousel_947794-7557.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Exclusive Offers</h3>
            <p>Don't miss our weekly deals and discounts.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/022/006/963/non_2x/ice-cream-illustration-background-generative-ai-photo.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Made with Love</h3>
            <p>Every scoop is crafted with fresh fruits and premium dairy products.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Signature Highlights */}
      <Container className="mt-5">
        <h2 className="text-center mb-4 fw-bold">Why Everyone Loves Pabbas</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body>
                <div className="mb-3" style={{ fontSize: "2.5rem" }}>🍧</div>
                <Card.Title>Signature Dishes</Card.Title>
                <Card.Text>Try our legendary Gadbad, Pabbas Special, and Dilkhush — unique to Mangalore!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body>
                <div className="mb-3" style={{ fontSize: "2.5rem" }}>🍓</div>
                <Card.Title>Fresh Ingredients</Card.Title>
                <Card.Text>Made fresh every day with real fruits, rich dairy, and zero artificial junk.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body>
                <div className="mb-3" style={{ fontSize: "2.5rem" }}>🏠</div>
                <Card.Title>Cozy Ambience</Card.Title>
                <Card.Text>Perfect for families, dates, and late-night hangouts with a scoop of nostalgia.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="bg-danger text-white py-5 mt-5 text-center">
        <Container>
          <h2 className="mb-3">Ready for a scoop of happiness?</h2>
          <p className="mb-4">Check out our menu and visit us today!</p>
          <Button as={Link} to="/menu" variant="light" size="lg">
            Browse Menu
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Home;
