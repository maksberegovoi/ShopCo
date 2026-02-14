import React, { useState } from 'react'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import styles from './Cart.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import { generatePath, Link, useNavigate } from 'react-router-dom'
import { CATALOG_ROUTE, DETAILS_ROUTE } from '../../utils/consts.js'
import { generateSlug } from '../../utils/generateSlug/generateSlug.js'
import Loader from '../../UI/Loader/Loader.jsx'
import Error from '../Error/Error.jsx'
import { MyInput } from '../../UI/MyInput/MyInput.jsx'
import { useCart } from '../../hooks/useCart/useCart.js'
import { optimizeUrl } from '../../utils/optimizeUrl/optimizeUrl.js'
import { CartSkeleton } from './CartSkeleton.jsx'

const Cart = () => {
    const navigate = useNavigate()
    const [promoCode, setPromoCode] = useState('')
    const {
        cart,
        isLoading,
        isError,
        error,
        removeFromCartHandler,
        increment,
        decrement
    } = useCart()
    const handleImgClick = (product) => {
        navigate(
            generatePath(DETAILS_ROUTE, {
                id: product.productId,
                slug: generateSlug(product.name)
            })
        )
    }

    if (isLoading) return <CartSkeleton />
    if (isError) return <Error error={error} />

    return (
        <div className={styles.container}>
            <h2>Your cart</h2>
            <div className={styles.content}>
                {cart.items.length < 1 ? (
                    <div className={styles.emptyWrapper}>
                        <div className={styles.empty}>
                            <h3 className={styles.emptyTitle}>Cart is empty</h3>
                            <MyButton
                                classname={styles.emptyBtn}
                                as={Link}
                                to={CATALOG_ROUTE}
                            >
                                Search catalog
                            </MyButton>
                        </div>
                    </div>
                ) : (
                    <ul
                        className={`${styles.list} ${cart.items.length > 2 ? styles['has-scroll'] : ''}`}
                    >
                        {cart.items.map((product) => (
                            <li
                                key={product.productVariantId}
                                className={styles.item}
                            >
                                <button
                                    className={styles.removeBtn}
                                    onClick={() =>
                                        removeFromCartHandler(
                                            product.cartItemId,
                                            product.productVariantId
                                        )
                                    }
                                    type="button"
                                    aria-label="delete product"
                                >
                                    <svg className={styles.iconTrash}>
                                        <use
                                            href={`${sprite}#icon-trash`}
                                        ></use>
                                    </svg>
                                </button>
                                <div className={styles.imageWrapper}>
                                    <img
                                        className={styles.image}
                                        src={optimizeUrl(product.avatar)}
                                        alt={product.name}
                                        onClick={() => handleImgClick(product)}
                                    />
                                    {product.discount > 0 && (
                                        <span className={styles.imgDiscount}>
                                            -{product.discount}%
                                        </span>
                                    )}
                                </div>
                                <div className={styles.info}>
                                    <dl className={styles.details}>
                                        <h5 className={styles.name}>
                                            {product.name}
                                        </h5>
                                        <div className={styles.detail}>
                                            <dt>Size:</dt>
                                            <dd className={styles.value}>
                                                {product.size}
                                            </dd>
                                        </div>
                                        <div className={styles.detail}>
                                            <dt>Color:</dt>
                                            <dd className={styles.value}>
                                                {product.color}
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className={styles.footer}>
                                        <div className={styles.priceContainer}>
                                            {product.discount > 0 && (
                                                <h4
                                                    className={styles.basePrice}
                                                >
                                                    ${product.basePrice}
                                                </h4>
                                            )}
                                            <h4>${product.price}</h4>
                                        </div>
                                        <div className={styles.quantity}>
                                            <button
                                                className={styles.quantityBtn}
                                                disabled={product.quantity <= 1}
                                                onClick={() =>
                                                    decrement(
                                                        product.cartItemId,
                                                        product.productVariantId,
                                                        product.quantity
                                                    )
                                                }
                                                aria-label="minus one item"
                                            >
                                                <svg
                                                    className={
                                                        styles.iconQuantity
                                                    }
                                                >
                                                    <use
                                                        href={`${sprite}#icon-minus`}
                                                    ></use>
                                                </svg>
                                            </button>
                                            <p>{product.quantity}</p>
                                            <button
                                                className={styles.quantityBtn}
                                                disabled={
                                                    product.quantity ===
                                                    product.stock
                                                }
                                                onClick={() =>
                                                    increment(
                                                        product.cartItemId,
                                                        product.productVariantId,
                                                        product.quantity
                                                    )
                                                }
                                                aria-label="plus one item"
                                            >
                                                <svg
                                                    className={
                                                        styles.iconQuantity
                                                    }
                                                >
                                                    <use
                                                        href={`${sprite}#icon-plus`}
                                                    ></use>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className={styles.summary}>
                    <h4>Order Summary</h4>
                    <dl className={styles.summaryList}>
                        <div className={styles.summaryItem}>
                            <dt className={styles.label}>Subtotal</dt>
                            <dd className={styles.amount}>
                                ${cart.summary.subTotal}
                            </dd>
                        </div>

                        {cart.summary.totalDiscount > 0 && (
                            <div className={styles.summaryItem}>
                                <dt className={styles.label}>Discount</dt>
                                <dd
                                    className={`${styles.amount} ${styles.discount}`}
                                >
                                    - ${cart.summary.totalDiscount}
                                </dd>
                            </div>
                        )}

                        {/*{promoCodeDiscountValue > 0 && (*/}
                        {/*    <div className={styles.summaryItem}>*/}
                        {/*        <dt className={styles.label}>*/}
                        {/*            Promo (-{promoCodeDiscount}%)*/}
                        {/*        </dt>*/}
                        {/*        <dd*/}
                        {/*            className={`${styles.amount} ${styles.discount}`}*/}
                        {/*        >*/}
                        {/*            - ${promoCodeDiscountValue}*/}
                        {/*        </dd>*/}
                        {/*    </div>*/}
                        {/*)}*/}

                        <div className={styles.summaryItem}>
                            <dt className={styles.label}>Delivery Fee</dt>
                            <dd className={styles.amount}>
                                ${cart.summary.deliveryFee}
                            </dd>
                        </div>
                    </dl>
                    <div className={styles.summaryItem}>
                        <dt className={styles.label}>Total</dt>
                        <dd className={styles.total}>${cart.summary.total}</dd>
                    </div>
                    <div className={styles.promo}>
                        <div className={styles.promoInputWrapper}>
                            <svg className={styles.iconPromo}>
                                <use href={`${sprite}#icon-promocode`}></use>
                            </svg>
                            <MyInput
                                disabled={true}
                                disabledMessage={
                                    'This feature is currently under development'
                                }
                                classname={styles.promoInput}
                                type="text"
                                placeholder="Add promo code"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                            />
                        </div>
                        {/*<MyButton*/}
                        {/*    disabled={promoCodeDiscountValue > 0}*/}
                        {/*    handleClick={handleCheckPromoCode}*/}
                        {/*    classname={styles.promoBtn}*/}
                        {/*    color={'white'}*/}
                        {/*>*/}
                        {/*    {isLoading ? (*/}
                        {/*        <Loader classname={styles.promoLoader} />*/}
                        {/*    ) : (*/}
                        {/*        'Check' + ' code'*/}
                        {/*    )}*/}
                        {/*</MyButton>*/}
                    </div>

                    <MyButton
                        classname={styles.checkoutBtn}
                        disabled={true}
                        disabledMessage={
                            'This feature is currently under development'
                        }
                    >
                        Go to Checkout
                        <svg className={styles.iconArrow}>
                            <use href={`${sprite}#icon-arrowRight`}></use>
                        </svg>
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default Cart
