import React, { Suspense } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails.jsx";
import { generatePath, NavLink, Outlet } from "react-router-dom";
import Loader from "../../UI/Loader/Loader.jsx";
import styles from "./DetailsPage.module.scss";
import { FAQ_ROUTE, REVIEWS_ROUTE } from "../../utils/consts.js";

const DetailsPage = () => {
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

  return (
    <>
      <section className={"container"}>
        <ProductDetails product={product} />
        <div className={styles.togglerContainer}>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Details
          </NavLink>
          <NavLink
            to={generatePath(REVIEWS_ROUTE)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Rating & Reviews
          </NavLink>
          <NavLink
            to={generatePath(FAQ_ROUTE)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            FAQs
          </NavLink>
        </div>
      </section>
      <section className={`${styles.outlet} container`}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default DetailsPage;
