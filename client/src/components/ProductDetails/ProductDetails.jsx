import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import { renderRatingStars } from "../../utils/productRatingStars.js";
import sprite from "../../../assets/icons/sprite.svg";
import ColorSelector from "../ColorSelector/ColorSelector.jsx";
import SizeSelector from "../SizeSelector/SizeSelector.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "T-SHIRT WITH TAPE DETAILS",
    description:
      "This graphic t-shirt which is perfect for any occasion." +
      " Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 800,
    basePrice: 10000,
    discount: 20,
    rating: 5,
    quantity: 100,
    colors: ["brown", "green", "purple"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    gallery: [
      "/images/productDetails/img-1.png",
      "/images/productDetails/img-2.png",
      "/images/productDetails/img-3.png",
    ],
    reviews: [
      {
        author: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        rating: 5,
        postDate: "August 14, 2023",
      },
      {
        author: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        rating: 5,
        postDate: "August 14, 2023",
      },
      {
        author: "Posted on August 14, 2023",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        rating: 5,
        postDate: "August 14, 2023",
      },
      {
        author: "Ethan R.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        rating: 5,
        postDate: "August 14, 2023",
      },
      {
        author: "Olivia P.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        rating: 5,
        postDate: "August 14, 2023",
      },
      {
        author: "Liam K.",
        comment:
          "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        rating: 5,
        postDate: "August 14, 2023",
      },
    ],
  };
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "../../../public/images/productDetails/img-1.png",
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
