import styles from "../FilterRows.module.scss";
import sprite from "../../../../assets/icons/sprite.svg";
import { useFilters } from "../../../hooks/useFilters.js";
import { stylesMap } from "../../../utils/consts.js";

const StyleFilter = ({ handler }) => {
  const { filters } = useFilters();

  const handleClick = (style) => {
    handler(style);
  };

  return (
    <div className={styles.container}>
      {stylesMap.map((style) => (
        <button
          key={style}
          type="button"
          aria-label={`style ${style}`}
          onClick={() => handleClick(style)}
          className={
            filters.style === style
              ? `${styles.option} ${styles.active}`
              : styles.option
          }
        >
          {style}
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </button>
      ))}
    </div>
  );
};

export default StyleFilter;
