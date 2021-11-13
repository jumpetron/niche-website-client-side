import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
      <Container className="my-5 footer">
        <Row xs={1} md={2} lg={4} sm={1} className="g-4">
          <Col>
            <img style={{ width: "150px" }} src={logo} alt="" />
            <p>
              Award-winning, family owned dealership of new and pre-owned
              vehicles with several locations across the city. Lowest prices and
              the best customer service guaranteed.
            </p>
          </Col>
          <Col>
            <p>
              <Link to="/blog">About Us</Link>
            </p>
            <p>
              <Link to="/blog">Contact Us</Link>
            </p>
            <p>
              <Link to="/blog">Privacy Policie</Link>
            </p>
          </Col>
          <Col>
            <p>
              <Link to="/blog">FAQ</Link>
            </p>
            <p>
              <Link to="/blog">Our Team</Link>
            </p>
            <p>
              <Link to="/blog">Blog</Link>
            </p>
          </Col>
          <Col>
            <h3>573-270-8341</h3>
            <p>support@motorev.com</p>
            <p>
              West 12th Street <br />
              New York, NY, USA
            </p>
          </Col>
        </Row>
      </Container>
    );
};

export default Footer;