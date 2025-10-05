import React from "react";
import styles from "./Catalog.module.scss";
import ProductCard from "../ProductCard/ProductCard.jsx";

const Catalog = ({ products, style = "" }) => {
  return (
    <>
      {products.length !== 0 ? (
        <ul className={`${styles.catalog} ${style}`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <h3>No products found</h3>
      )}
    </>
  );
};

export default Catalog;
