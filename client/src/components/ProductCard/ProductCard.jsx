import React from "react";
import sprite from "../../../assets/icons/sprite.svg";
import { renderRatingStars } from "../../utils/productRatingStars.js";
import styles from "./ProductCard.module.scss";
import { applyPriceDiscount } from "../../utils/applyPriceDiscount.js";
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
      <img
        src={product.img}
        alt="product image"
        className={styles.cardImage}
        onClick={handleClick}
      />
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
          <p className={styles.ratingNumber}>
            {product.rating}/
            <span className={styles.ratingNumberAccent}>5</span>
          </p>
        </div>
        {product?.discount ? (
          <div className={styles.priceContainer}>
            <p>
              {"$"}
              {applyPriceDiscount(product.price, product.discount)}
            </p>
            <p className={styles.priceBeforeDiscount}>
              {"$"}
              {product.price}
            </p>
            <p className={styles.discount}>
              {"-"}
              {product.discount}
              {"%"}
            </p>
          </div>
        ) : (
          <div className={styles.priceContainer}>
            <p>
              {"$"}
              {product.price}
            </p>
          </div>
        )}
      </div>
    </li>
  );
};

export default ProductCard;
