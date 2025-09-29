import React from "react";
import styles from "./ColorSelector.module.scss";
import sprite from "../../../assets/icons/sprite.svg";

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  const getColorValue = (colorName) => {
    const colorMap = {
      black: "#000000",
      red: "#FF0000",
      blue: "#0000FF",
      green: "#314F4A",
      grey: "#808080",
      beige: "#F5F5DC",
      brown: "#4F4631",
      pink: "#FFC0CB",
      purple: "#31344F",
      yellow: "#FFFF00",
    };
    return colorMap[colorName.toLowerCase()] || "#CCCCCC";
  };

  return (
    <div className={styles.colorSelector}>
      <p>Select Colors</p>
      <div className={styles.colorOptions}>
        {colors.map((color) => (
          <button
            disabled={!color.available}
            key={color.name}
            className={styles.colorSwatch}
            style={{ backgroundColor: getColorValue(color.name) }}
            onClick={() => onColorChange(color)}
            aria-label={color}
            title={color}
          >
            <svg
              className={
                selectedColor === color
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
