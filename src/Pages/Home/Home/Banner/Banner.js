import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/01.png'
import banner2 from '../../../../images/02.png'
import banner3 from '../../../../images/03.png'

const Banner = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;