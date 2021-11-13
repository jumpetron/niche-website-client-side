import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutus from '../../../../images/dealership.jpg'
import { AiFillCheckCircle } from "react-icons/ai";
import './AboutSection.css'

const AboutSection = () => {
    return (
      <div className="about-section">
        <Row xs={1} md={1} lg={2} sm={1} className="my-5">
          <Col>
            <img className="img-fluid about-us" src={aboutus} alt="" />
          </Col>
          <Col className="d-flex align-items-center">
            <div>
              <h1>About Us</h1>
              <div className="w-75">
                <h5>
                  How the adventure ended will be seen anon. <br />
                  Aouda was anxious, though she said nothing.
                </h5>
                <p>
                  As for Passepartout, he thought Mr. Fogg’s manoeuvre simply
                  glorious. The captain had said “between eleven and twelve
                  knots,” and the Henrietta confirmed his prediction. How the
                  adventure ended will be seen anon. Aouda was anxious, though
                  she said nothing.
                </p>
              </div>
              <p>
                <AiFillCheckCircle className="me-2 fs-4" />
                Quality Cars at Guaranteed Prices
              </p>
              <p>
                <AiFillCheckCircle className="me-2 fs-4" />
                Routine Service Available
              </p>
              <p>
                <AiFillCheckCircle className="me-2 fs-4" />
                Turn Your Car Into Cash
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default AboutSection;