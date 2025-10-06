import React from "react";
import styles from "../FilterRows.module.scss";
import sprite from "../../../../assets/icons/sprite.svg";
import { useFilters } from "../../../hooks/useFilters.js";
import { useGetCategoriesQuery } from "../../../redux/features/categories/categoriesAPI.js";
import Loader from "../../../UI/Loader/Loader.jsx";
import Error from "../../Error/Error.jsx";

const CategoryFilter = ({ handler }) => {
  const { filters } = useFilters();
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const handleClick = (category) => {
    handler(category);
  };
  return (
    <div className={styles.container}>
      {categories.map(({ name }, index) => (
        <button
          key={`${name}-${index}`}
          type="button"
          aria-label={`type ${name}`}
          onClick={() => handleClick(name)}
          className={
            filters.category === name
              ? `${styles.option} ${styles.active}`
              : styles.option
          }
        >
          {name}
          {filters.category === name && (
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-check-mark`}></use>
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
