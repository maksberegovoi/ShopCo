export const renderRatingStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      return "star";
    } else if (rating >= starValue - 0.5) {
      return "starHalf";
    } else {
      return null;
    }
  }).filter((starType) => starType !== null);
};
