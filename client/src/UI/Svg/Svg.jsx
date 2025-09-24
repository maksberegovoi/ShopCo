import React from "react";

const Svg = ({ width = 24, height = 24, href, styles = "" }) => {
  return (
    <svg width={width} height={height} className={styles}>
      <use href={href}></use>
    </svg>
  );
};

export default Svg;
