import React, { useEffect, useState } from "react";
import styles from "./CartPage.module.scss";
import sprite from "../../../assets/icons/sprite.svg";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(123);

  const products = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 145,
      img: "../images/image7.png",
      size: "Large",
      color: "red",
      discount: 20,
    },
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 145,
      img: "../images/image7.png",
      size: "Large",
      color: "red",
      discount: 20,
    },
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS1",
      price: 145,
      img: "../images/image7.png",
      size: "Large",
      color: "red",
      discount: 20,
    },
    {
      id: 2,
      name: "SKINNY FIT JEANS",
      price: 180,
      img: "../images/image7.png",
      size: "Large",
      color: "black",
      discount: 0,
    },
    {
      id: 3,
      name: "CHECKERED SHIRT",
      price: 240,
      img: "../images/image7.png",
      size: "Large",
      color: "yellow",
      discount: 0,
    },
  ];

  const orderSummary = [
    { key: "Subtotal", value: `$${totalPrice}` },
    { key: "Discount (-20%)", value: `-$${totalDiscount}` },
    { key: "Delivery Fee", value: `$${15}` },
  ];

  const handleTotalPrice = (totalPrice) => {
    return products.map((product) => {
      setTotalPrice((totalPrice += Number(product.price)));
      // if (product?.discount > 0) {
      //   setTotalDiscount()
      // }
    });
  };

  useEffect(() => {
    handleTotalPrice(totalPrice);
  }, []);

  return (
    <section className={"container"}>
      <div className={styles.container}>
        <h2>Your cart</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            {products.map((product) => (
              <li className={styles.item}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.image}
                    src={product.img}
                    alt={product.name}
                  />
                </div>
                <div className={styles.info}>
                  <dl className={styles.details}>
                    <div className={styles.header}>
                      <h5>{product.name}</h5>
                      <button type="button" aria-label="delete product">
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
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.summary}>
            <h4>Order Summary</h4>
            <dl className={styles.summaryList}>
              <div className={styles.summaryItem}>
                <dt className={styles.label}>Subtotal</dt>
                <dd className={styles.amount}>${totalPrice}</dd>
              </div>
              <div className={styles.summaryItem}>
                <dt className={styles.label}>Discount (-20%)</dt>
                <dd className={`${styles.amount} ${styles.discount}`}>
                  - ${totalDiscount}
                </dd>
              </div>
              <div className={styles.summaryItem}>
                <dt className={styles.label}>Delivery Fee</dt>
                <dd className={styles.amount}>${15}</dd>
              </div>
            </dl>
            <div className={styles.summaryItem}>
              <dt className={styles.label}>Total</dt>
              <dd className={styles.amount}>${totalPrice}</dd>
            </div>
            <div className={styles.promo}>
              <div className={styles.promoInput}>
                <svg className={styles.iconPromo}>
                  <use href={`${sprite}#icon-promocode`}></use>
                </svg>
                <input type="text" placeholder="Add promo code" />
              </div>
              <MyButton classname={styles.promoBtn} color={"white"}>
                Check code
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
    </section>
  );
};

export default CartPage;
