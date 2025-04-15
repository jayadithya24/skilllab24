import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel>
      {/* First Slide: Ice Cream Sundae */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1574158622685-183206ec3064?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjI1NXwwfDF8c2VhcmNofDJ8fGljZSUyMGNyZWFtJTIwc3VuZGF5fGVufDB8fHx8fDE2NzcwNzg1NzY&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Ice Cream Sundae"
        />
        <Carousel.Caption>
          <h3>Indulge in Our Delicious Sundaes!</h3>
          <p>Perfectly layered with fruits, cream, and ice cream!</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide: Ice Cream Cone */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1564631810-3a157e2da5bc?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjI1NXwwfDF8c2VhcmNofDExfHxpc2NlJTIwY3JlYW18ZW58MHx8fHwxNjc3MTAwOTY4&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Ice Cream Cone"
        />
        <Carousel.Caption>
          <h3>Fresh Ice Cream Cones</h3>
          <p>Our cones are filled with the most delicious flavors.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide: Ice Cream Milkshake */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1616592791309-28b8ef3cb0d8?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjI1NXwwfDF8c2VhcmNofDkxfHxjaG9jb2xhdGUlMjBtaWxrc2hha2V8ZW58MHx8fHwxNjc3MTAwMDEw&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Ice Cream Milkshake"
        />
        <Carousel.Caption>
          <h3>Thick & Creamy Milkshakes</h3>
          <p>Our milkshakes are made with real ice cream for extra thickness!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
