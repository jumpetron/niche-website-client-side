import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import cars from '../../../../images/cars.jpg'
import finance from "../../../../images/finance.jpg"
import services from "../../../../images/services.jpg";


const servicing = [
  {
    name: "Browser Inventory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: cars,
  },
  {
    name: "Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: services,
  },
  {
    name: "Finance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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