import React from "react";
import Categories from "../../components/Categories/Categories.jsx";
import Hero from "./Hero/Hero.jsx";
import ProductTypes from "./ProductStyles/ProductStyles.jsx";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <ProductTypes />
    </main>
  );
};

export default HomePage;
