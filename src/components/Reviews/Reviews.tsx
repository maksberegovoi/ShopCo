import React from 'react'
import styles from './Reviews.module.scss'
import { renderRatingStars } from '../../utils/productRatingStars/productRatingStars'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error'
import { useGetProductReviewsQuery } from '../../api/products/productsAPI'
import { formatDateTime } from '../../utils/formatDate/formatDate'
import { ReviewsSkeleton } from './ReviewsSkeleton'

const Reviews = () => {
    const { id } = useParams()
    const limit = 6

    const { data, isLoading, isError, error } = useGetProductReviewsQuery({
        id,
        limit
    })

    if (isLoading) return <ReviewsSkeleton />
    if (isError) return <Error error={error} />

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {data.map((review, index) => (
                    <li
                        key={review.id || `${review.comment}-${index}`}
                        className={styles.item}
                    >
                        <span className={styles.rating}>
                            {renderRatingStars(review.rating)}
                        </span>
                        <h5>{review.author}</h5>
                        <p>{review.comment}</p>
                        <span>{formatDateTime(review.createdAt)}</span>
                    </li>
                ))}
            </ul>
            {/*{hasMore && (*/}
            {/*    <MyButton*/}
            {/*        handleClick={loadMore}*/}
            {/*        color={'white'}*/}
            {/*        classname={styles.btn}*/}
            {/*    >*/}
            {/*        Load More*/}
            {/*    </MyButton>*/}
            {/*)}*/}
        </div>
    )
}

export default Reviews
