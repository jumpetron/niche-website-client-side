import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, picture, info, price, _id, brand } = props.product;
  return (
    <div className="product-container g-4">
      <div className="product">
        <img className="product-img" src={picture} alt="" />
        <h3>{name}</h3>
        <p>{brand}</p>
        <p>{info}</p>
        <p>Price: ${price}</p>
      </div>
      <Link to={`/products/${_id}`}>
        <Button type="button">Buy Now</Button>
      </Link>
    </div>
  );
};

export default Product;
