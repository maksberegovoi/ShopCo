import React from "react";
import { colorMap } from "../../../utils/consts.js";
import styles from "./ColorFilter.module.scss";
import sprite from "../../../../assets/icons/sprite.svg";
import { useFilters } from "../../../hooks/useFilters.js";

const ColorFilter = () => {
  const { filters, toggleColor } = useFilters();

  const handleClick = (color) => {
    toggleColor(color);
  };

  return (
    <div className={styles.container}>
      {colorMap.map((color) => (
        <button
          key={color.name}
          className={
            filters.colors.includes(color.name)
              ? `${styles.color} ${styles.active}`
              : styles.color
          }
          style={{ backgroundColor: color.hex }}
          onClick={() => handleClick(color.name)}
          aria-label={color.name}
          title={color.name}
        >
          <svg
            className={
              filters.colors.includes(color.name)
                ? `${styles.iconCheckMark} ${styles.active}`
                : styles.iconCheckMark
            }
          >
            <use href={`${sprite}#icon-check-mark`}></use>
          </svg>
        </button>
      ))}
    </div>
  );
};

export default ColorFilter;
