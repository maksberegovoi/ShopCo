import React from "react";
import styles from "./SizeSelector.module.scss";

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div className={styles.container}>
      <p>Choose Size</p>
      <div className={styles.sizeOptions}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${styles.size} ${
              selectedSize === size ? styles.active : ""
            }`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
