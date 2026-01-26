import React from "react";
import styles from "../FilterButtons.module.scss";
import { brandsMap } from "../../../utils/consts.js";
import { useFilters } from "../../../hooks/useFilters/useFilters.js";

const BrandFilter = ({ handler }) => {
  const { filters } = useFilters();

  const handleClick = (brand) => {
    handler(brand);
  };

  return (
    <div className={styles.container}>
      {brandsMap.map((brand) => (
        <button
          key={brand}
          onClick={() => handleClick(brand)}
          className={
            filters.brands.includes(brand)
              ? `${styles.btn} ${styles.active}`
              : styles.btn
          }
          type="button"
          aria-label={brand}
        >
          {brand}
        </button>
      ))}
    </div>
  );
};

export default BrandFilter;
