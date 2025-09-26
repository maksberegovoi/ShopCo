import React from "react";
import data from "../../../public/data.json";
import ProductsList from "../ProductsList/ProductsList.jsx";
import styles from "./Categories.module.scss";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { CATALOG_ROUTE } from "../../utils/consts.js";

const Categories = () => {
  console.log(data);
  return (
    <>
      {data.map((category) => (
        <section className={styles.category}>
          <h2>{category.name}</h2>
          <ProductsList products={category.products} />
          <MyButton to={CATALOG_ROUTE} classname={styles.categoryButton}>
            View All
          </MyButton>
        </section>
      ))}
    </>
  );
};

export default Categories;
