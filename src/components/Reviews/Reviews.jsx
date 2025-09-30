import React from "react";
import styles from "./Reviews.module.scss";
import { renderRatingStars } from "../../utils/productRatingStars.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { useGetProductReviewsQuery } from "../../redux/features/products/productsAPI.js";
import Loader from "../../UI/Loader/Loader.jsx";
import { useParams } from "react-router-dom";
import Error from "../Error/Error.jsx";

const Reviews = () => {
  const { id } = useParams();
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useGetProductReviewsQuery(id);

  const loadMore = () => {};

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <li className={styles.item}>
            <span className={styles.rating}>
              {renderRatingStars(review.rating)}
            </span>
            <h5>{review.author}</h5>
            <p>{review.comment}</p>
            <span>{review.postDate}</span>
          </li>
        ))}
      </ul>
      <MyButton handleClick={loadMore} color={"white"} classname={styles.btn}>
        Load More
      </MyButton>
    </div>
  );
};

export default Reviews;
