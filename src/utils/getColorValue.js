import { colorMap } from "./consts.js";

export const getColorValue = (colorName) => {
  const color = colorMap.find(
    (color) => color.name === colorName.toLowerCase(),
  );
  return color ? color.hex : "transparent";
};
