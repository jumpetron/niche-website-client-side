import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import cars from '../../../../images/cars.jpg'
import finance from "../../../../images/finance.jpg"
import services from "../../../../images/services.jpg";


const servicing = [
  {
    name: "Browser Inventory",
    description:
      "The most trusted used car dealer in Stafford, VA. Offering high-quality quality used cars for sale, with lots of vehicle options available. Call us now!",
    img: cars,
  },
  {
    name: "Services",
    description:
      "Need an emergency car service near you? Sheba.xyz has experienced car service providers in Bangladesh for any car related services. Book Now.",
    img: services,
  },
  {
    name: "Finance",
    description:
      "Having your own car is more of a necessity now and we are to pave you the most comfortable way to it. Your wheel is now your will.",
    img: finance,
  },
];

const Servicing = () => {
    return (
      <Container className="d-grid mt-5">
        <h3 className="text-center">We Provied</h3>
        <Row xs={1} md={2} sm={1} lg={3} className="gx-4">
          {servicing.map((service) => (
            <Col style={{ me: "auto" }}>
              <Card key={service.name}>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>
                    {service.description}
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default Servicing;