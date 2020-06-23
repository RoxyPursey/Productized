import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../../../assets/conference_gradient_peq.jpg';
import CarouselImg2 from '../../../assets/meetups_gradient_peq.jpg';
import CarouselImg3 from '../../../assets/courses_gradient._2jpg_peq.jpg';
import './HomepageCarousel.css';

function HomepageCarousel() {
  return (
    <Carousel interval="4000">
      <Carousel.Item>
        <a
          href="https://productized.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100 carousel-img"
            src={CarouselImg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Conference 2020</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/meetups" target="_blank" rel="noopener noreferrer">
          <img
            className="d-block w-100 carousel-img"
            src={CarouselImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Meetups</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/courses" target="_blank" rel="noopener noreferrer">
          <img
            className="d-block w-100 carousel-img"
            src={CarouselImg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Courses</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;
