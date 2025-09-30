import React from "react";
import styles from "./Pagination.module.scss";
import MyButton from "../MyButton/MyButton.jsx";
import sprite from "../../../assets/icons/sprite.svg";

const Pagination = ({ page, total, limit, onPageChange }) => {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;

  const handlePrev = () => onPageChange(Math.max(page - 1, 1));
  const handleNext = () => onPageChange(Math.min(page + 1, totalPages));

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navBtn}
        onClick={handlePrev}
        disabled={page === 1}
      >
        <svg className={`${styles.arrow} ${styles.arrowLeft}`}>
          <use href={`${sprite}#icon-arrowRight`}></use>
        </svg>
        Previous
      </button>
      <div className={styles.pages}>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={
              p === page ? `${styles.page} ${styles.active}` : styles.page
            }
          >
            {p}
          </button>
        ))}
      </div>
      <button
        className={styles.navBtn}
        onClick={handleNext}
        disabled={page === totalPages}
      >
        Next
        <svg className={`${styles.arrow} ${styles.arrowRight}`}>
          <use href={`${sprite}#icon-arrowRight`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
