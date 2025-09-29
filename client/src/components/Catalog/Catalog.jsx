import React, { useState } from "react";
import styles from "./Catalog.module.scss";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { mockProducts } from "../../../data/produсts.js";

const Catalog = () => {
  const [filterName, setFilterName] = useState("Catalog");
  const [availiableProducts, setAvailiablProducts] = useState(9);

  return (
    <>
      <div className={styles.header}>
        <h3>{filterName}</h3>
        <div className={styles.productsNumber}>
          <p>
            Showing {mockProducts.length} of {availiableProducts} Products
          </p>
        </div>
      </div>
      <ul className={styles.list}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Catalog;
