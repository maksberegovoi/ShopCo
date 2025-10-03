import React from "react";
import styles from "./SizeFilter.module.scss";
import { sizeMap } from "../../../utils/consts.js";
import { useFilters } from "../../../hooks/useFilters.js";

const SizeFilter = () => {
  const { filters, toggleSize } = useFilters();
  const handleClick = (size) => {
    toggleSize(size);
  };

  return (
    <div className={styles.container}>
      {sizeMap.map((size) => (
        <button
          key={size}
          onClick={() => handleClick(size)}
          className={
            filters.sizes.includes(size)
              ? `${styles.btn} ${styles.active}`
              : styles.btn
          }
          type="button"
          aria-label={size}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeFilter;
