import sprite from "../../../assets/icons/sprite.svg";

export const renderRatingStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    let starType;

    if (rating >= starValue) {
      starType = "star";
    } else if (rating >= starValue - 0.5) {
      starType = "starHalf";
    } else {
      starType = null;
    }

    if (starType) {
      return (
        <svg key={index} className={"icon-star"}>
          <use href={`${sprite}#icon-${starType}`}></use>
        </svg>
      );
    }

    return null;
  }).filter(Boolean);
};
