import styles from "../TypeFilter/TypeFilter.module.scss";
import { styleMap } from "../../../utils/consts.js";
import sprite from "../../../../assets/icons/sprite.svg";
import { useFilters } from "../../../hooks/useFilters.js";

const StyleFilter = () => {
  const { filters, toggleStyle } = useFilters();
  const handleClick = (style) => {
    toggleStyle(style);
  };

  return (
    <div className={styles.container}>
      {styleMap.map((style) => (
        <div
          key={style}
          className={
            filters.style === style
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
