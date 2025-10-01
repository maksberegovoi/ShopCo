import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import { renderRatingStars } from "../../utils/productRatingStars.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import ColorSelector from "../ColorSelector/ColorSelector.jsx";
import SizeSelector from "../SizeSelector/SizeSelector.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import {useDispatch, useSelector} from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice.js";
import toast from "react-hot-toast";

const ProductDetails = ({ product, isLoading }) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.gallery[0]);

  const addToCard = () => {
    if(!selectedColor) {
      return toast.error('Choose the color')
    }
    if(!selectedSize) {
      return toast.error('Choose the size')
    }
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        basePrice: product.basePrice,
        img: product.gallery[0],
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
      }),
    );
    setSelectedSize(null)
    setSelectedColor(null)
    setQuantity(1)
    toast.success('Added to your cart');
  };

  if (isLoading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.thumbnails}>
          {product.gallery.map((image) => (
            <button
              key={image}
              className={`${styles.thumbnail} ${
                image === mainImage ? styles.active : ""
              }`}
              onClick={() => setMainImage(image)}
              aria-label="product image"
            >
              <img
                src={image}
                alt="product image"
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
