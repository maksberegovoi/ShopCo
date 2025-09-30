import React, { useState } from "react";
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, children, onToggle, absolute = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer} onClick={toggle}>
      <div className={styles.accordion}>
        <p>{title}</p>
        <button onClick={onToggle}>
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
