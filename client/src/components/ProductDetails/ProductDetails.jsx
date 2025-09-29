import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import { renderRatingStars } from "../../utils/productRatingStars.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import ColorSelector from "../ColorSelector/ColorSelector.jsx";
import SizeSelector from "../SizeSelector/SizeSelector.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const ProductDetails = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "/images/productDetails/img-1.png",
  );

  const addToCard = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.thumbnails}>
          {product.gallery.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${
                image === mainImage ? styles.active : ""
              }`}
              onClick={() => setMainImage(image)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
        <div className={styles.mainImageContainer}>
          <img
            src={mainImage}
            alt="Main product"
            className={styles.mainImage}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2>{product.name}</h2>
          <div className={styles.ratingContainer}>
            <div className={styles.ratingIconsContainer}>
              {renderRatingStars(product.rating)}
            </div>
            <p>
              {product.rating}/
              <span className={styles.ratingNumberAccent}>5</span>
            </p>
          </div>
          <div className={styles.priceContainer}>
            {product.discount > 0 ? (
              <>
                <span className={styles.currentPrice}>${product.price}</span>
                <span className={styles.originalPrice}>
                  ${product.basePrice}
                </span>
                <span className={styles.discount}>-{product.discount}%</span>
              </>
            ) : (
              <span className={styles.currentPrice}>${product.price}</span>
            )}
          </div>
          <p>{product.description}</p>
        </div>
        <ColorSelector
          colors={product.colors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
        />
        <div className={styles.footer}>
          <div className={styles.quantity}>
            <button
              disabled={quantity <= 1}
              onClick={() => setQuantity(quantity - 1)}
              aria-label="minus one item"
            >
              <svg className={styles.iconQuantity}>
                <use href={`${sprite}#icon-minus`}></use>
              </svg>
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => setQuantity(quantity + 1)}
              aria-label="plus one item"
            >
              <svg className={styles.iconQuantity}>
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
            </button>
          </div>
          <MyButton classname={styles.btnCart} handleClick={addToCard}>
            Add to Cart
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
