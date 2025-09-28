import React from "react";
import sprite from "../../../assets/icons/sprite.svg";
import { renderRatingStars } from "../../utils/productRatingStars.js";
import styles from "./ProductCard.module.scss";
import { generatePath, useNavigate } from "react-router-dom";
import { DETAILS_ROUTE } from "../../utils/consts.js";
import { generateSlug } from "../../utils/generateSlug.js";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(
      generatePath(DETAILS_ROUTE, {
        id: product.id,
        slug: generateSlug(product.name),
      }),
    );
  };

  return (
    <li className={styles.card}>
      <div className={styles.imgContainer}>
        <img
          src={product.img}
          alt="product image"
          className={styles.cardImage}
          onClick={handleClick}
        />
      </div>
      <div className={styles.cardContent}>
        <h5 className={styles.cardName}>{product.name}</h5>
        <div className={styles.ratingContainer}>
          <div className={styles.ratingIconsContainer}>
            {renderRatingStars(product.rating).map((starType, index) => (
              <svg key={index} className={styles.iconStar}>
                <use href={`${sprite}#icon-${starType}`}></use>
              </svg>
            ))}
          </div>
          <p>
            {product.rating}/
            <span className={styles.ratingNumberAccent}>5</span>
          </p>
        </div>
        <div className={styles.priceContainer}>
          {product.discount > 0 ? (
            <>
              <span>${product.price}</span>
              <span className={styles.originalPrice}>${product.basePrice}</span>
              <span className={styles.discount}>-{product.discount}%</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
        <svg className={styles.iconCart}>
          <use href={`${sprite}#icon-cart`}></use>
        </svg>
      </div>
    </li>
  );
};

export default ProductCard;
