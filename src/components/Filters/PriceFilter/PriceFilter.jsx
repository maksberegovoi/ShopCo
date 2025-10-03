import React, { useEffect, useRef, useState } from "react";
import styles from "./PriceFilter.module.scss";
import { maxProductPrice } from "../../../utils/consts.js";
import { useFilters } from "../../../hooks/useFilters.js";

const PriceFilter = () => {
  const rangeRef = useRef(null);
  const valueRef = useRef(null);
  const [price, setPrice] = useState(maxProductPrice);

  const { setMaxPrice } = useFilters();

  const handleChange = (e) => {
    setPrice(e.target.value);
    updatePosition(e.target);
  };

  const handleMouseUp = () => {
    setMaxPrice(price);
  };

  const updatePosition = (inputEl) => {
    if (!valueRef.current || !rangeRef.current) return;

    const { min, max, value, offsetWidth } = inputEl;
    const percent = (value - min) / (max - min);
    const newLeft = percent * offsetWidth;

    rangeRef.current.style.left = `${newLeft - rangeRef.current.offsetWidth / 2}px`;
  };

  useEffect(() => {
    if (valueRef.current) {
      updatePosition(valueRef.current);
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <p>0$</p>
        <input
          type="range"
          min="0"
          max={maxProductPrice}
          step="10"
          value={price}
          ref={valueRef}
          onChange={handleChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className={styles.range}
        />
        <p>{maxProductPrice}$</p>
        <span className={styles.rangeValue} ref={rangeRef}>
          {price}$
        </span>
      </div>
    </>
  );
};

export default PriceFilter;
