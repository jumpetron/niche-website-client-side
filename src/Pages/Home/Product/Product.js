import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, picture, info, price, _id } = props.product;
  return (
    <div className="product-container g-4">
      <div>
        <img className="product-img img-fluid" src={picture} alt="" />
        <h3>{name}</h3>
        <p>{info}</p>
        <p>{price}</p>
        <Link to={`/products/${_id}`}>
          <button type="button" className="btn btn-outline-danger">
            PURCHASE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
