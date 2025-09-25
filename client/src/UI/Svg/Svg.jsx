import React from "react";
import style from "./Svg.module.scss";

const Svg = ({ width = 24, height = 24, href, styles = "" }) => {
  return (
    <svg width={width} height={height} className={`${style.icon} ${styles}`}>
      <use href={href}></use>
    </svg>
  );
};

export default Svg;
