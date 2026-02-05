import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.scss'
import { renderRatingStars } from '../../utils/productRatingStars/productRatingStars.jsx'
import sprite from '../../../assets/icons/sprite.svg'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { useGetProductByIdQuery } from '../../api/products/productsAPI.js'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error.jsx'
import { optimizeUrl } from '../../utils/optimizeUrl/optimizeUrl.js'
import { ProductDetailsSkeleton } from './ProductDetailsSkeleton.jsx'

const ProductDetails = () => {
    const { id } = useParams()
    const {
        data: product,
        isLoading,
        isError,
        error
    } = useGetProductByIdQuery(id)

    // const [selectedColor, setSelectedColor] = useState(null)
    // const [selectedSize, setSelectedSize] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [mainImage, setMainImage] = useState(
        import.meta.env.VITE_FALLBACK_CARD_IMAGE
    )

    const addToCard = () => {
        console.log('add to cart')
    }

    useEffect(() => {
        if (!product) return
        console.log(product)
        const mainImage =
            product.gallery.find((img) => img.isMain)?.url ??
            import.meta.env.VITE_FALLBACK_CARD_IMAGE

        setMainImage(optimizeUrl(mainImage))
    }, [product])

    if (isLoading) return <ProductDetailsSkeleton />
    if (isError) return <Error error={error} />

    return (
        <div className={styles.container}>
            <div className={styles.gallery}>
                <div className={styles.thumbnails}>
                    {product.gallery.map(({ url, isMain }) => (
                        <button
                            key={url}
                            className={`${styles.thumbnail} ${
                                isMain ? styles.active : ''
                            }`}
                            onClick={() => setMainImage(url)}
                            aria-label="product image"
                        >
                            <img
                                src={optimizeUrl(url)}
                                alt="product image"
                                className={styles.thumbnailImage}
                            />
                        </button>
                    ))}
                </div>
                <div className={styles.mainImageContainer}>
                    <img
                        alt="Main product"
                        className={styles.mainImage}
                        src={mainImage}
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
                                <span className={styles.currentPrice}>
                                    ${product.price}
                                </span>
                                <span className={styles.originalPrice}>
                                    ${product.basePrice}
                                </span>
                                <span className={styles.discount}>
                                    -{product.discount}%
                                </span>
                            </>
                        ) : (
                            <span className={styles.currentPrice}>
                                ${product.price}
                            </span>
                        )}
                    </div>
                    <p>{product.description}</p>
                </div>
                {/*<ColorSelector*/}
                {/*    colors={product.colors}*/}
                {/*    selectedColor={selectedColor}*/}
                {/*    onColorChange={setSelectedColor}*/}
                {/*/>*/}
                {/*<SizeSelector*/}
                {/*    sizes={product.sizes}*/}
                {/*    selectedSize={selectedSize}*/}
                {/*    onSizeChange={setSelectedSize}*/}
                {/*/>*/}
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
                    <MyButton
                        classname={styles.btnCart}
                        handleClick={addToCard}
                    >
                        Add to Cart
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
