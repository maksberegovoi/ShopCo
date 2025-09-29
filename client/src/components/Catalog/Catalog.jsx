import React, { useState } from "react";
import styles from "./Catalog.module.scss";
import ProductCard from "../ProductCard/ProductCard.jsx";

const Catalog = () => {
  const [filterName, setFilterName] = useState("Catalog");
  const [availiableProducts, setAvailiablProducts] = useState(9);
  const products = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 2,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 3,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 4,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 5,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 6,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 7,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 8,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
    {
      id: 9,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 800,
      basePrice: 10000,
      discount: 20,
      img: "../images/image7.png",
      rating: 5,
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <h3>{filterName}</h3>
        <div className={styles.productsNumber}>
          <p>
            Showing {products.length} of {availiableProducts} Products
          </p>
        </div>
      </div>
      <ul className={styles.list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Catalog;
