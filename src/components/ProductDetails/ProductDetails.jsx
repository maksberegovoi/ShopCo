import React, { useState, useEffect } from 'react'
import styles from './ProductDetails.module.scss'
import { renderRatingStars } from '../../utils/productRatingStars/productRatingStars.jsx'
import sprite from '../../../assets/icons/sprite.svg'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { useGetProductByIdQuery } from '../../api/products/productsAPI.js'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error.jsx'
import { optimizeUrl } from '../../utils/optimizeUrl/optimizeUrl.js'
import { ProductDetailsSkeleton } from './ProductDetailsSkeleton.jsx'
import SizeSelector from '../SizeSelector/SizeSelector.jsx'
import ColorSelector from '../ColorSelector/ColorSelector.jsx'
import { useProductVariants } from '../../hooks/useProductVariants/useProductVariants.js'
import {
    useAddCartItemMutation,
    useGetCartQuery
} from '../../api/cart/cartAPI.js'
import toast from 'react-hot-toast'
import { isDev } from '../../utils/consts.js'

const ProductDetails = () => {
    const { id } = useParams()
    const [mainImage, setMainImage] = useState(
        import.meta.env.VITE_FALLBACK_CARD_IMAGE
    )
    const [quantity, setQuantity] = useState(0)

    const {
        data: product,
        isLoading: isProductLoading,
        isError,
        error
    } = useGetProductByIdQuery(id)
    const [addCartItem] = useAddCartItemMutation()
    const { data: cart, isLoading: isCartLoading } = useGetCartQuery()

    const {
        colors,
        sizes,
        selectedColor,
        selectedSize,
        onSelectColor,
        onSelectSize,
        selectedVariant
    } = useProductVariants(product?.variants ?? [], cart?.items ?? [])

    const addToCard = async () => {
        if (!selectedSize || !selectedColor) {
            return toast.error('Choose both: size and color!')
        }
        try {
            await addCartItem({
                productVariantId: selectedVariant.id,
                quantity
            }).unwrap()
            onSelectColor(null)
            onSelectSize(null)
            setQuantity(0)

            toast.success('Added to cart')
        } catch (err) {
            if (isDev) {
                toast.error('ERROR, check console to see more ->')
                console.log(err)
            } else {
                toast.error('Something went wrong... Try again later')
            }
        }
    }

    const increment = () => {
        if (!selectedVariant) return
        setQuantity((q) =>
            Math.min(q + 1, selectedVariant.availableStockForUser)
        )
    }

    const decrement = () => {
        if (!selectedVariant) return
        setQuantity((q) => Math.max(q - 1, 1))
    }

    const gallery = React.useMemo(() => {
        if (!product) return []

        return product.gallery.map((img) => ({
            ...img,
            optimizedUrl: optimizeUrl(img.url)
        }))
    }, [product])

    useEffect(() => {
        if (!selectedVariant) return
        setQuantity(Math.min(1, selectedVariant.availableStockForUser))
    }, [selectedVariant])

    useEffect(() => {
        if (!product) return

        const mainImage =
            product.gallery.find((img) => img.isMain)?.url ??
            import.meta.env.VITE_FALLBACK_CARD_IMAGE

        setMainImage(optimizeUrl(mainImage))
    }, [product])

    if (isProductLoading || isCartLoading) return <ProductDetailsSkeleton />
    if (isError) return <Error error={error} />
    return (
        <div className={styles.container}>
            <div className={styles.gallery}>
                <div className={styles.thumbnails}>
                    {gallery.map(({ optimizedUrl }) => (
                        <button
                            key={optimizedUrl}
                            className={`${styles.thumbnail} ${
                                optimizedUrl === mainImage ? styles.active : ''
                            }`}
                            onClick={() => setMainImage(optimizedUrl)}
                            aria-label="product image"
                        >
                            <img
                                src={optimizedUrl}
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
                <ColorSelector
                    colors={colors}
                    selectedColor={selectedColor}
                    onSelectColor={onSelectColor}
                />
                <SizeSelector
                    sizes={sizes}
                    selectedSize={selectedSize}
                    onSelectSize={onSelectSize}
                />
                <div className={styles.footer}>
                    <div className={styles.quantity}>
                        <button
                            disabled={quantity <= 1}
                            onClick={decrement}
                            aria-label="minus one item"
                        >
                            <svg className={styles.iconQuantity}>
                                <use href={`${sprite}#icon-minus`}></use>
                            </svg>
                        </button>
                        <p>{quantity}</p>
                        <button
                            onClick={increment}
                            aria-label="plus one item"
                            disabled={
                                !selectedVariant ||
                                quantity >=
                                    selectedVariant.availableStockForUser
                            }
                        >
                            <svg className={styles.iconQuantity}>
                                <use href={`${sprite}#icon-plus`}></use>
                            </svg>
                        </button>
                    </div>
                    <MyButton classname={styles.btnCart} onClick={addToCard}>
                        Add to Cart
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
