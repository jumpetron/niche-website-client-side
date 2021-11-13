import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import { FaQuoteLeft } from "react-icons/fa";
import './Review.css'
import Reviews from './Reviews/Reviews';


const Review = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

    return (
      <Container className="review-section">
        <div className="text-center">
          <FaQuoteLeft />
          <h2>Testimonials</h2>
          <p>
            Visit one of the largest used car dealerships in the New York. Visit
            us today.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {reviews.map((review) => (
              <Reviews key={review.id} review={review}></Reviews>
            ))}
          </Slider>
        </div>
      </Container>
    );
};

export default Review;