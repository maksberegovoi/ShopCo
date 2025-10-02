import React, { useState } from "react";
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, children, absolute = false, visible = false }) => {
  const [isOpen, setIsOpen] = useState(visible);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordion} onClick={toggle}>
        <p>{title}</p>
        <button aria-label={`open ${title} menu`}>
          <svg
            className={isOpen ? `${styles.icon} ${styles.active}` : styles.icon}
          >
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className={
            absolute
              ? `${styles.accordionContent} ${styles.absolute}`
              : styles.accordionContent
          }
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
