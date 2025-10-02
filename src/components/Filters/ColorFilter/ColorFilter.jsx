import React from "react";
import { colorMap } from "../../../utils/consts.js";
import styles from "./ColorFilter.module.scss";
import sprite from "../../../../assets/icons/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { filtersColors } from "../../../redux/features/filters/filtersSelector.js";
import { toggleColor } from "../../../redux/features/filters/filtersSlice.js";

const ColorFilter = () => {
  const dispatch = useDispatch();
  const filterColors = useSelector(filtersColors);

  const handleClick = (color) => {
    dispatch(toggleColor(color));
  };

  return (
    <div className={styles.container}>
      {colorMap.map((color) => (
        <button
          key={color.name}
          className={
            filterColors.includes(color.name)
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
              filterColors.includes(color.name)
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
