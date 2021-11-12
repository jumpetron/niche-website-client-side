import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <div className="main-container my-5">
        <div>
          <h5>Handy picked</h5>
          <h2>Featured Listings</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="products-container">
            {products.slice(0, 6).map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
