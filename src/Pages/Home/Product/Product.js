import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, picture, info } = props.product;
  return (
    <div className="product-container g-4">
      <div>
            <img className="product-img img-fluid" src={picture} alt="" />
          <h3>{name}</h3>
          <p>{info}</p>
      </div>
    </div>
  );
};

export default Product;
