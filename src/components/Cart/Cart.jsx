import React, { useState } from "react";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import styles from "./Cart.module.scss";
import sprite from "../../../assets/icons/sprite.svg";
import { generatePath, useNavigate } from "react-router-dom";
import { DETAILS_ROUTE } from "../../utils/consts.js";
import { generateSlug } from "../../utils/generateSlug.js";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts } from "../../redux/features/cart/cartSelectors.js";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from "../../redux/features/cart/cartSlice.js";
import {
  useLazyCheckPromoCodeQuery
} from "../../redux/features/promocode/promoCodeAPI.jsx";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader/Loader.jsx";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [promocode, setPromocode] = useState("");
  const [isPromo, setIsPromo] = useState(false);
  const [promoValue, setPromoValue] = useState(0);
  const [checkPromoCode, { isLoading }] = useLazyCheckPromoCodeQuery();

  const products = useSelector(cartProducts);

  const { priceBeforeDiscount, priceAfterDiscount } = products.reduce(
    (acc, product) => ({
      priceBeforeDiscount: acc.priceBeforeDiscount + Number(product.basePrice || 0),
      priceAfterDiscount: acc.priceAfterDiscount + Number(product.price || 0),
    }),
    { priceBeforeDiscount: 0, priceAfterDiscount: 0 }
  );

  const deliveryFee = 15;

  const subtotal = priceBeforeDiscount;
  const afterProductDiscount = priceAfterDiscount;
  const productDiscount = subtotal - afterProductDiscount;
  const promoAmount = isPromo ? (afterProductDiscount * (promoValue / 100)) : 0;
  const total = (afterProductDiscount - promoAmount) + deliveryFee;

  const handleImgClick = (product) => {
    navigate(
      generatePath(DETAILS_ROUTE, {
        id: product.id,
        slug: generateSlug(product.name),
      })
    );
  };

  const handleCheckPromoCode = async () => {
    if (!promocode.trim()) {
      toast.error("Enter promo code");
      return;
    }

    try {
      const result = await checkPromoCode({ code: promocode }).unwrap();
      // ожидаем, что result.value — число (процент)
      setPromoValue(Number(result.value) || 0);
      setIsPromo(true);
      toast.success(`Promo code applied! Discount: ${result.value}%`);
    } catch (err) {
      toast.error(err.data || "Invalid promo code");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Your cart</h2>
      <div className={styles.content}>
        {products.length < 1 ? (
          <div className={styles.empty}>
            <h3>Cart is empty</h3>
          </div>
        ) : (
          <ul className={styles.list}>
            {products.map((product) => (
              <li key={product.id} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.image}
                    src={product.img}
                    alt={product.name}
                    onClick={() => handleImgClick(product)}
                  />
                </div>
                <div className={styles.info}>
                  <dl className={styles.details}>
                    <div className={styles.header}>
                      <h5>{product.name}</h5>
                      <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        type="button"
                        aria-label="delete product"
                      >
                        <svg className={styles.iconTrash}>
                          <use href={`${sprite}#icon-trash`}></use>
                        </svg>
                      </button>
                    </div>
                    <div className={styles.detail}>
                      <dt>Size:</dt>
                      <dd className={styles.value}>{product.size}</dd>
                    </div>
                    <div className={styles.detail}>
                      <dt>Color:</dt>
                      <dd className={styles.value}>{product.color}</dd>
                    </div>
                  </dl>
                  <div className={styles.footer}>
                    <h4>${product.price}</h4>
                    <div className={styles.quantity}>
                      <button
                        onClick={() => dispatch(decrementQuantity(product.id))}
                        aria-label="minus one item"
                      >
                        <svg className={styles.iconQuantity}>
                          <use href={`${sprite}#icon-minus`}></use>
                        </svg>
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        onClick={() => dispatch(incrementQuantity(product.id))}
                        aria-label="plus one item"
                      >
                        <svg className={styles.iconQuantity}>
                          <use href={`${sprite}#icon-plus`}></use>
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
              <dd className={styles.amount}>${subtotal.toFixed(2)}</dd>
            </div>

            <div className={styles.summaryItem}>
              <dt className={styles.label}>Discount</dt>
              <dd className={`${styles.amount} ${styles.discount}`}>
                - ${productDiscount.toFixed(2)}
              </dd>
            </div>

            {isPromo && (
              <div className={styles.summaryItem}>
                <dt className={styles.label}>Promo ({promoValue}%)</dt>
                <dd className={`${styles.amount} ${styles.discount}`}>
                  - ${promoAmount.toFixed(2)}
                </dd>
              </div>
            )}

            <div className={styles.summaryItem}>
              <dt className={styles.label}>Delivery Fee</dt>
              <dd className={styles.amount}>${deliveryFee.toFixed(2)}</dd>
            </div>
          </dl>
          <div className={styles.summaryItem}>
            <dt className={styles.label}>Total</dt>
            <dd className={styles.amount}>${total.toFixed(2)}</dd>
          </div>
          <div className={styles.promo}>
            <div className={styles.promoInput}>
              <svg className={styles.iconPromo}>
                <use href={`${sprite}#icon-promocode`}></use>
              </svg>
              <input
                type="text"
                placeholder="Add promo code ('FREE' / 'FRONTEND')"
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
              />
            </div>
            <MyButton handleClick={handleCheckPromoCode} classname={styles.promoBtn} color={"white"}>
              {isLoading ? <Loader /> : "Check code"}
            </MyButton>
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
  );
};

export default Cart;
