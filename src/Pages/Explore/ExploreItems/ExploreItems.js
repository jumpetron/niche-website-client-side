import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExploreItems.css";

const ExploreItems = (props) => {
  const { name, picture, info, price, _id, brand } = props.product;
  return (
    <Container>
      <div>
        <div>
          <img className="img-fluid" src={picture} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <h5>Price:${price}</h5>
          <p>{brand}</p>
          <p>{info}</p>
          <Link to={`/products/${_id}`}>
            <Button>Buy Now</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ExploreItems;
