import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { FaQuoteLeft } from "react-icons/fa";
import './Review.css'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css"


const Review = () => {
    return (
      <Container className="review-section">
        <div className="text-center">
          <FaQuoteLeft/>
          <h2>Testimonials</h2>
          <p>
            Visit one of the largest used car dealerships in the New York. Visit
            us today.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h5>Ahmed Foysal</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae fuga mollitia molestiae voluptas laborum exercitationem
              eos earum commodi dicta quasi.
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    );
};

export default Review;