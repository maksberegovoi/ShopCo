import React from "react";

const Svg = ({ width = 24, height = 24, href, classname = "" }) => {
  return (
    <svg width={width} height={height} className={classname}>
      <use href={href}></use>
    </svg>
  );
};

export default Svg;
