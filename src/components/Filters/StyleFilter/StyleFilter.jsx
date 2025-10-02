import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStyle } from "../../../redux/features/filters/filtersSlice.js";
import { filtersStyle } from "../../../redux/features/filters/filtersSelector.js";
import styles from "../TypeFilter/TypeFilter.module.scss";
import { styleMap } from "../../../utils/consts.js";
import sprite from "../../../../assets/icons/sprite.svg";

const StyleFilter = () => {
  const dispatch = useDispatch();
  const handleClick = (style) => {
    dispatch(toggleStyle(style));
  };

  const selectedStyle = useSelector(filtersStyle);

  return (
    <div className={styles.container}>
      {styleMap.map((style) => (
        <div
          key={style}
          className={
            selectedStyle === style
              ? `${styles.option} ${styles.active}`
              : styles.option
          }
          onClick={() => handleClick(style)}
        >
          <button type="button" aria-label={`style ${style}`}>
            {style}
          </button>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StyleFilter;
