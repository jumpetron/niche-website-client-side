import React, { useEffect, useState } from "react";
import ExploreItems from "./ExploreItems/ExploreItems";
import "./Explore.css";
import { Container } from "react-bootstrap";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <Navigation></Navigation>
        <div className="main-container">
          <h1 className="">Our Products: {products.length}</h1>
          <div className="d-flex justify-content-center">
            <div className="explore-container">
              {products.map((product) => (
                <ExploreItems key={product.id} product={product}></ExploreItems>
              ))}
            </div>
          </div>
        </div>
    <Footer></Footer>
    </>
  );
};

export default Explore;
