import React, { useEffect, useState } from "react";
import ExploreItems from "./ExploreItems/ExploreItems";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import { Container } from "react-bootstrap";
import './Explore.css'

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-anchorage-98613.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <h1 className="">Our Products: {products.length}</h1>
        <div>
          <div>
            {products.map((product) => (
              <ExploreItems key={product.id} product={product}></ExploreItems>
            ))}
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Explore;
