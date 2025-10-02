import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSize } from "../../../redux/features/filters/filtersSlice.js";
import { filtersSizes } from "../../../redux/features/filters/filtersSelector.js";
import styles from "./SizeFilter.module.scss";
import { sizeMap } from "../../../utils/consts.js";

const SizeFilter = () => {
  const dispatch = useDispatch();
  const handleClick = (size) => {
    dispatch(toggleSize(size));
  };

  const selectedSizes = useSelector(filtersSizes);

  return (
    <div className={styles.container}>
      {sizeMap.map((size) => (
        <button
          key={size}
          onClick={() => handleClick(size)}
          className={
            selectedSizes.includes(size)
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
