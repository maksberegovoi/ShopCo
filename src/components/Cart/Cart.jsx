import React, { useState } from 'react'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import styles from './Cart.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import { generatePath, useNavigate } from 'react-router-dom'
import { DETAILS_ROUTE } from '../../utils/consts.js'
import { generateSlug } from '../../utils/generateSlug/generateSlug.js'
import Loader from '../../UI/Loader/Loader.jsx'
import {
    useDeleteCartItemMutation,
    useGetCartQuery,
    useUpdateCartItemQuantityMutation
} from '../../api/cart/cartAPI.js'
import Error from '../Error/Error.jsx'

const Cart = () => {
    const navigate = useNavigate()

    const { data, isLoading, isError, error } = useGetCartQuery()
    const [deleteCartItem] = useDeleteCartItemMutation()
    const [updateCartItemQuantity] = useUpdateCartItemQuantityMutation()

    const [promoCode, setPromoCode] = useState('')
    // const promoCodeDiscount = useSelector(cartPromoCodeDiscount)
    // const [checkPromoCode, { isLoading }] = useLazyCheckPromoCodeQuery()

    const handleImgClick = (product) => {
        navigate(
            generatePath(DETAILS_ROUTE, {
                id: product.productId,
                slug: generateSlug(product.name)
            })
        )
    }

    // const handleCheckPromoCode = async () => {
    //     if (!promoCode.trim()) {
    //         toast.error('Enter promo code')
    //         return
    //     }
    //
    //     try {
    //         const result = await checkPromoCode({ code: promoCode }).unwrap()
    //         dispatch(setPromoCodeDiscount(Number(result.value)))
    //         toast.success(`Promo code applied! Discount: ${result.value}%`)
    //     } catch (err) {
    //         toast.error(err.data || 'Invalid promo code')
    //     }
    // }

    if (isLoading) return <Loader />
    if (isError) return <Error error={error} />
    const { items, summary } = data
    return (
        <div className={styles.container}>
            <h2>Your cart</h2>
            <div className={styles.content}>
                {items.length < 1 ? (
                    <div className={styles.empty}>
                        <h3>Cart is empty</h3>
                    </div>
                ) : (
                    <ul className={styles.list}>
                        {items.map((product) => (
                            <li
                                key={product.cartItemId}
                                className={styles.item}
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        className={styles.image}
                                        src={product.avatar}
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
                                        <div className={styles.header}>
                                            <h5>{product.name}</h5>
                                            <button
                                                onClick={() =>
                                                    deleteCartItem(
                                                        product.cartItemId
                                                    )
                                                }
                                                type="button"
                                                aria-label="delete product"
                                            >
                                                <svg
                                                    className={styles.iconTrash}
                                                >
                                                    <use
                                                        href={`${sprite}#icon-trash`}
                                                    ></use>
                                                </svg>
                                            </button>
                                        </div>
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
                                        <h4>${product.price}</h4>
                                        <div className={styles.quantity}>
                                            <button
                                                disabled={product.quantity <= 1}
                                                onClick={() =>
                                                    updateCartItemQuantity({
                                                        id: product.cartItemId,
                                                        quantity:
                                                            product.quantity - 1
                                                    })
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
                                                disabled={
                                                    product.quantity ===
                                                    product.stock
                                                }
                                                onClick={() =>
                                                    updateCartItemQuantity({
                                                        id: product.cartItemId,
                                                        quantity:
                                                            product.quantity + 1
                                                    })
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
                                ${summary.subTotal}
                            </dd>
                        </div>

                        {summary.totalDiscount > 0 && (
                            <div className={styles.summaryItem}>
                                <dt className={styles.label}>Discount</dt>
                                <dd
                                    className={`${styles.amount} ${styles.discount}`}
                                >
                                    - ${summary.totalDiscount}
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
                                ${summary.deliveryFee}
                            </dd>
                        </div>
                    </dl>
                    <div className={styles.summaryItem}>
                        <dt className={styles.label}>Total</dt>
                        <dd className={styles.amount}>${summary.total}</dd>
                    </div>
                    <div className={styles.promo}>
                        <div className={styles.promoInput}>
                            <svg className={styles.iconPromo}>
                                <use href={`${sprite}#icon-promocode`}></use>
                            </svg>
                            <input
                                type="text"
                                placeholder="Add promo code ('FREE' / 'PROMOCODE')"
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

                    <MyButton classname={styles.checkoutBtn}>
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
