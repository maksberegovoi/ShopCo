import React from "react";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./TypeFilter.module.scss";

const TypeFilter = () => {
  const types = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

  const handleClick = () => {};

  return (
    <div className={styles.container}>
      {types.map((type) => (
        <div className={styles.option}>
          <button type="button" onClick={handleClick}>
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
