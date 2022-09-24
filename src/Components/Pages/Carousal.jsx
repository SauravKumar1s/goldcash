import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const Carousal = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100 h-sm-25"
        src="https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg"
        alt="First slide"
        style={{height:'640px'}}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.kgkgroup.com/wp-content/uploads/2019/12/Make-The-Jewellery-Speak-2.jpg"
        alt="Second slide"
        style={{height:'640px'}}

      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.hazoorilaljewellers.com/wp-content/uploads/2022/02/03-1.jpg"
        alt="Third slide"
        style={{height:'640px'}}

      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carousal