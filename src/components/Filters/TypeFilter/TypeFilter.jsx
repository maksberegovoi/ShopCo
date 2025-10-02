import React from "react";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./TypeFilter.module.scss";
import { typeMap } from "../../../utils/consts.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleType } from "../../../redux/features/filters/filtersSlice.js";
import { filtersType } from "../../../redux/features/filters/filtersSelector.js";

const TypeFilter = () => {
  const dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch(toggleType(type));
  };

  const selectedType = useSelector(filtersType);

  return (
    <div className={styles.container}>
      {typeMap.map((type) => (
        <div
          key={type}
          className={
            selectedType === type
              ? `${styles.option} ${styles.active}`
              : styles.option
          }
          onClick={() => handleClick(type)}
        >
          <button type="button" aria-label={`type ${type}`}>
            {type}
          </button>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default TypeFilter;
