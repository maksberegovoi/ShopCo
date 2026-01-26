import React from "react";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "../FilterRows.module.scss";
import { useFilters } from "../../../hooks/useFilters/useFilters.js";
import { typesMap } from "../../../utils/consts.js";

const TypeFilter = ({ handler }) => {
  const { filters } = useFilters();

  const handleClick = (type) => {
    handler(type);
  };

  return (
    <div className={styles.container}>
      {typesMap.map((type) => (
        <button
          key={type}
          type="button"
          aria-label={`type ${type}`}
          onClick={() => handleClick(type)}
          className={
            filters.type === type
              ? `${styles.option} ${styles.active}`
              : styles.option
          }
        >
          {type}
          {filters.type === type && (
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-check-mark`}></use>
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

export default TypeFilter;
