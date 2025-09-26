export const applyPriceDiscount = (price, discountPercent) => {
  return price * (1 - discountPercent / 100);
};
