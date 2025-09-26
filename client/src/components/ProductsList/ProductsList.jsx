import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ products }) => {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
