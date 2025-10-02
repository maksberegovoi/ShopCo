import React from "react";
import styles from "./Filters.module.scss";
import Accordion from "../Accordion/Accordion.jsx";
import StyleFilter from "./StyleFilter/StyleFilter.jsx";
import SizeFilter from "./SizeFilter/SizeFilter.jsx";
import ColorFilter from "./ColorFilter/ColorFilter.jsx";
import PriceFilter from "./PriceFilter/PriceFilter.jsx";
import TypeFilter from "./TypeFilter/TypeFilter.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const Filters = ({ isOpen, handleClick, deviceType }) => {
  return (
    <div
      className={
        isOpen ? `${styles.filterBox} ${styles.isOpen}` : styles.filterBox
      }
    >
      <div className={styles.title}>
        <h4>Filters</h4>
        <button aria-label="close filters" onClick={() => handleClick()}>
          <svg className={styles.iconClose}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
      </div>
      <div className={styles.content}>
        <Accordion title={"Type"} visible={true}>
          <TypeFilter />
        </Accordion>
        <Accordion title={"Price"} visible={true}>
          <PriceFilter />
        </Accordion>
        <Accordion title={"Colors"} visible={true}>
          <ColorFilter />
        </Accordion>
        <Accordion title={"Size"} visible={true}>
          <SizeFilter />
        </Accordion>
        <Accordion title={"Dress Style"} visible={true}>
          <StyleFilter />
        </Accordion>
        {deviceType !== "desktop" && (
          <MyButton handleClick={() => handleClick()} classname={styles.btn}>
            Close Filters
          </MyButton>
        )}
      </div>
    </div>
  );
};

export default Filters;
