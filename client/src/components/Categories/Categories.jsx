import React from "react";
import data from "../../../public/data.json";
import styles from "./Categories.module.scss";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { CATALOG_ROUTE } from "../../utils/consts.js";
import ProductCard from "../ProductCard/ProductCard.jsx";

const Categories = () => {
  console.log(data);
  return (
    <>
      {data.map((category) => (
        <div key={category.name} className={styles.category}>
          <h2 className={styles.title}>{category.name}</h2>
          <ul className={styles.list}>
            {category.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </ul>
          <MyButton
            to={CATALOG_ROUTE}
            classname={styles.categoryButton}
            color={"white"}
          >
            View All
          </MyButton>
        </div>
      ))}
    </>
  );
};

export default Categories;
