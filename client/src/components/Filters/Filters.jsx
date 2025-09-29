import React, { useEffect, useRef, useState } from "react";
import styles from "./Filters.module.scss";
import Accordion from "../Accordion/Accordion.jsx";
import CategoryFilter from "./CategoryFilter/CategoryFilter.jsx";

const Filters = () => {
  const [price, setPrice] = useState(50);
  const rangeRef = useRef(null);
  const valueRef = useRef(null);

  return (
    <div className={styles.filterBox}>
      <h3>Filters</h3>

      <Accordion title={"Categories"}>
        <CategoryFilter />
      </Accordion>
      <Accordion title={"Price"}></Accordion>
      <Accordion title={"Colors"}></Accordion>
      <Accordion title={"Size"}></Accordion>
      <Accordion title={"Dress Style"}></Accordion>

      {/* Price */}
      <div className={styles.section}>
        <span className={styles.label}>Price</span>
        <div className={styles.rangeWrapper}>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={price}
            ref={rangeRef}
            onChange={(e) => setPrice(Number(e.target.value))}
            className={styles.range}
          />
          <div className={styles.rangeValue} ref={valueRef}>
            ${price}
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className={styles.section}>
        <span className={styles.label}>Colors</span>
        <div className={styles.colors}>
          {[
            "blue",
            "red",
            "yellow",
            "orange",
            "green",
            "purple",
            "pink",
            "black",
            "white",
          ].map((c, i) => (
            <button
              key={i}
              className={`${styles.colorCircle} ${styles[c]}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className={styles.section}>
        <span className={styles.label}>Size</span>
        <div className={styles.sizes}>
          {[
            "XX-Small",
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "3X-Large",
            "4X-Large",
          ].map((s, i) => (
            <button
              key={i}
              className={`${styles.sizeBtn} ${
                s === "Large" ? styles.activeSize : ""
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div className={styles.section}>
        <details>
          <summary className={styles.summary}>Dress Style</summary>
          <ul className={styles.list}>
            <li>Casual</li>
            <li>Formal</li>
            <li>Party</li>
            <li>Gym</li>
          </ul>
        </details>
      </div>

      {/* Apply Button */}
      <button className={styles.applyBtn}>Apply Filter</button>
    </div>
  );
};

export default Filters;
