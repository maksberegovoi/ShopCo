import React, { useState } from 'react'
import styles from './Reviews.module.scss'
import { renderRatingStars } from '../../utils/productRatingStars/productRatingStars.jsx'
import Loader from '../../UI/Loader/Loader.jsx'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error.jsx'
import MyButton from '../../UI/MyButton/MyButton.jsx'

const Reviews = () => {
    // const { id } = useParams() TODO: add id to params
    const [page, setPage] = useState(1)
    // const limit = 6 TODO: add limit to params
    const { isLoading, isError, reviewsData } = {}
    const loadMore = () => setPage((prev) => prev + 1)

    if (isLoading && page === 1) return <Loader />
    if (isError) return <Error />

    const { items: reviews = [], hasMore = false } = reviewsData || {}

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {reviews.map((review, index) => (
                    <li key={review.id || `${review.comment}-${index}`} className={styles.item}>
                        <span className={styles.rating}>{renderRatingStars(review.rating)}</span>
                        <h5>{review.author}</h5>
                        <p>{review.comment}</p>
                        <span>{review.postDate}</span>
                    </li>
                ))}
            </ul>
            {hasMore && (
                <MyButton handleClick={loadMore} color={'white'} classname={styles.btn}>
                    Load More
                </MyButton>
            )}
        </div>
    )
}

export default Reviews
