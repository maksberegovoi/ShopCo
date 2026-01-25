import { colorMap } from "../consts.js";

export const getColorValue = (colorName) => {
  let color;
  if (typeof colorName === "string") {
    colorName = colorName.toLowerCase().trim();
    color = colorMap.find((color) => color.name === colorName);
  }
  return color ? color.hex : "transparent";
};
