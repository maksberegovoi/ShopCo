import React from 'react'
import { renderRatingStars } from '../../utils/productRatingStars/productRatingStars.jsx'
import styles from './ProductCard.module.scss'
import { generatePath, useNavigate } from 'react-router-dom'
import { DETAILS_ROUTE } from '../../utils/consts.js'
import { generateSlug } from '../../utils/generateSlug/generateSlug.js'
import { getColorValue } from '../../utils/getColorValue/getColorValue.js'
import sprite from '../../../assets/icons/sprite.svg'

const ProductCard = ({ product }) => {
    const navigate = useNavigate()

    const url = generatePath(DETAILS_ROUTE, {
        id: product.id,
        slug: generateSlug(product.name)
    })

    const handleClick = (e) => {
        if (e.ctrlKey || e.metaKey || e.button === 1) return

        e.preventDefault()
        navigate(url)
    }

    return (
        <li className={styles.container}>
            <a className={styles.card} href={url} onClick={(e) => handleClick(e)}>
                <div className={styles.imgContainer}>
                    <img src={product.avatar} alt="product image" className={styles.cardImage} />
                    {product?.discount > 0 && (
                        <span className={styles.discount}>-{product.discount}%</span>
                    )}
                </div>
                <div className={styles.cardContent}>
                    <h5 className={styles.cardName}>{product?.name || ''}</h5>
                    <div className={styles.ratingContainer}>
                        <div className={styles.ratingIconsContainer}>
                            {renderRatingStars(product.rating)}
                        </div>
                        <p>
                            {product.rating}/<span className={styles.ratingNumberAccent}>5</span>
                        </p>
                    </div>
                    <div className={styles.colors}>
                        {product.colors.map((color) => (
                            <span
                                key={color.name}
                                className={styles.color}
                                style={{
                                    backgroundColor: getColorValue(color.name),
                                    cursor: color.available ? 'auto' : 'not-allowed'
                                }}
                                title={
                                    getColorValue(color.name) === 'transparent'
                                        ? 'unknown'
                                        : color.name
                                }
                            >
                                {!color.available && (
                                    <svg
                                        className={styles.iconNotAvailiable}
                                        style={{ fill: color.name === 'red' ? 'black' : 'red' }}
                                    >
                                        <use href={`${sprite}#icon-close`}></use>
                                    </svg>
                                )}
                            </span>
                        ))}
                    </div>
                    <div className={styles.priceContainer} translate="no">
                        {product.discount > 0 ? (
                            <>
                                <span>${product.price}</span>
                                <span className={styles.originalPrice}>${product.basePrice}</span>
                            </>
                        ) : (
                            <span>${product.price || 0}</span>
                        )}
                    </div>
                </div>
            </a>
        </li>
    )
}

export default ProductCard
