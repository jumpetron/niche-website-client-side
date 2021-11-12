import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExploreItems.css";

const ExploreItems = (props) => {
  const { name, picture, info, price, _id } = props.product;
  return (
    <Container>
      <div className="exploreitems-container">
        <div>
          <img className="exploreitems-img" src={picture} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <h5>Price: {price}$</h5>
          <p>Shot info: {info.slice(0, 35)}</p>
          <Link to={`/products/${_id}`}>
            <button type="button" className="btn btn-outline-dark">
              PURCHASE
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ExploreItems;
