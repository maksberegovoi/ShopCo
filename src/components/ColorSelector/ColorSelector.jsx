import React from "react";
import styles from "./ColorSelector.module.scss";
import sprite from "../../../assets/icons/sprite.svg";
import { getColorValue } from "../../utils/getColorValue.js";

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className={styles.colorSelector}>
      <p>Select Colors</p>
      <div className={styles.colorOptions}>
        {colors.map((color) => (
          <button
            disabled={!color.available}
            key={color.name}
            className={
              selectedColor === color.name
                ? `${styles.colorSwatch} ${styles.active}`
                : styles.colorSwatch
            }
            style={{
              backgroundColor: getColorValue(color.name),
              opacity: color.available ? 1 : 0.3,
            }}
            onClick={() => onColorChange(color.name)}
            aria-label={color.name}
            title={
              getColorValue(color.name) === "transparent"
                ? "unknown"
                : color.name
            }
          >
            <svg
              className={
                selectedColor === color.name
                  ? `${styles.iconCheckMark} ${styles.active}`
                  : styles.iconCheckMark
              }
            >
              <use href={`${sprite}#icon-check-mark`}></use>
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
