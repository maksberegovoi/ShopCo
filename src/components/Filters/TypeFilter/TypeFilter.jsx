import React from "react";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./TypeFilter.module.scss";
import { typeMap } from "../../../utils/consts.js";
import { useFilters } from "../../../hooks/useFilters.js";

const TypeFilter = () => {
  const { filters, toggleType } = useFilters();

  const handleClick = (type) => {
    toggleType(type);
  };

  return (
    <div className={styles.container}>
      {typeMap.map((type) => (
        <div
          key={type}
          className={
            filters.type === type
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
