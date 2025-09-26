import React from "react";
import Svg from "../../UI/Svg/Svg.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import { renderRatingStars } from "../../utils/productRatingStars.js";
import styles from "./ProductCard.module.scss";
import { applyPriceDiscount } from "../../utils/applyPriceDiscount.js";

const ProductCard = ({ product }) => {
  return (
    <li className={styles.card}>
      <img src={product.img} alt="product image" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h5 className={styles.cardName}>{product.name}</h5>
        <div className={styles.ratingContainer}>
          <div className={styles.ratingIconsContainer}>
            {renderRatingStars(product.rating).map((starType, index) => (
              <Svg
                key={index}
                href={`${sprite}#icon-${starType}`}
                alt={`${starType} star`}
                classname={styles.iconStar}
              />
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
