import React, { useEffect, useRef, useState } from "react";
import styles from "./PriceFilter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filtersMaxPrice } from "../../../redux/features/filters/filtersSelector.js";
import { setMaxPrice } from "../../../redux/features/filters/filtersSlice.js";

const PriceFilter = () => {
  const dispatch = useDispatch();

  const rangeRef = useRef(null);
  const valueRef = useRef(null);
  const maxPrice = useSelector(filtersMaxPrice);
  const [price, setPrice] = useState(maxPrice);

  const handleChange = (e) => {
    setPrice(e.target.value);
    updatePosition(e.target);
  };

  const handleMouseUp = () => {
    dispatch(setMaxPrice(price));
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
          max="1000"
          step="10"
          value={price}
          ref={valueRef}
          onChange={handleChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className={styles.range}
        />
        <p>1000$</p>
        <span className={styles.rangeValue} ref={rangeRef}>
          {price}$
        </span>
      </div>
    </>
  );
};

export default PriceFilter;
