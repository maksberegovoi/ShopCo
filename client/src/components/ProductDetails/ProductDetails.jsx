import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import { renderRatingStars } from "../../utils/productRatingStars.js";
import sprite from "../../../assets/icons/sprite.svg";

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
    colors: ["red", "yellow", "blue", "white", "black", "brown", "green"],
    availiableColors: ["brown", "black", "green"],
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

  const [mainImage, setMainImage] = useState(
    "../../../public/images/productDetails/img-1.png",
  );

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
        <div className={styles.mainImage}>
          <img src={mainImage} alt="Main product" className={styles.image} />
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
        <div>
          <p>Select Colors</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
