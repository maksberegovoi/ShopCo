import React from "react";
import styles from "./Categories.module.scss";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { CATALOG_ROUTE } from "../../utils/consts.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useGetCategoriesQuery } from "../../redux/features/categories/categoriesAPI.js";
import Loader from "../../UI/Loader/Loader.jsx";
import Error from "../Error/Error.jsx";

const Categories = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();
  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  return (
    <section className={"container"}>
      {categories.map((category) => (
        <div key={category.name} className={styles.category}>
          <h2>{category.name}</h2>
          <ul className={styles.list}>
            {category.products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
          <MyButton
            to={`${CATALOG_ROUTE}?category=${category.name}`}
            classname={styles.categoryButton}
            color={"white"}
          >
            View All
          </MyButton>
        </div>
      ))}
    </section>
  );
};

export default Categories;
