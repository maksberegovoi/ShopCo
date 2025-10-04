import React from "react";
import sprite from "../../../assets/icons/sprite.svg";
import { renderRatingStars } from "../../utils/productRatingStars.jsx";
import styles from "./ProductCard.module.scss";
import { generatePath, useNavigate } from "react-router-dom";
import { DETAILS_ROUTE } from "../../utils/consts.js";
import { generateSlug } from "../../utils/generateSlug.js";
import { getColorValue } from "../../utils/getColorValue.js";

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
    <li className={styles.card} onClick={handleClick}>
      <div className={styles.imgContainer}>
        <img
          src={product.gallery[0] || ""}
          alt="product image"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h5 className={styles.cardName}>{product?.name || ""}</h5>
        <div className={styles.ratingContainer}>
          <div className={styles.ratingIconsContainer}>
            {renderRatingStars(product.rating)}
          </div>
          <p>
            {product.rating}/
            <span className={styles.ratingNumberAccent}>5</span>
          </p>
        </div>
        <div className={styles.colors}>
          {product.colors.map((color) => (
            <span
              key={color.name}
              className={styles.color}
              style={{
                backgroundColor: getColorValue(color.name),
                opacity: color.available ? 1 : 0.2,
                cursor: color.available ? "auto" : "not-allowed",
              }}
              title={
                getColorValue(color.name) === "transparent"
                  ? "unknown"
                  : color.name
              }
            ></span>
          ))}
        </div>
        <div className={styles.priceContainer} translate="no">
          {product.discount > 0 ? (
            <>
              <span>${product.price}</span>
              <span className={styles.originalPrice}>${product.basePrice}</span>
              <span className={styles.discount}>-{product.discount}%</span>
            </>
          ) : (
            <span>${product.price || 0}</span>
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
