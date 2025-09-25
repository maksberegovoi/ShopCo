import React, { useState } from "react";
import Svg from "../../UI/Svg/Svg.jsx";
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
          <Svg
            href={`${sprite}#icon-arrow`}
            width={16}
            height={16}
            styles={isOpen ? `${styles.icon} ${styles.active}` : styles.icon}
          />
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
