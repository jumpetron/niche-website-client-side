import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="main-container">
      <h5>Handy picked</h5>
      <h2>Featured Listings</h2>
      <div className="d-flex justify-content-center">
        <div className="products-container">
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
