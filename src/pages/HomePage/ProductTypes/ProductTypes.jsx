import React from "react";
import styles from "./ProductTypes.module.scss";
import casualImg from "/images/productTypes/casual.png";
import gymImg from "/images/productTypes/gym.png";
import partyImg from "/images/productTypes/party.png";
import formalImg from "/images/productTypes/formal.png";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../../../utils/consts.js";

const ProductTypes = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(CATALOG_ROUTE);
  };
  return (
    <section className={`container`}>
      <div className={styles.typesWrapper}>
        <h2>BROWSE BY DRESS STYLE</h2>
        <div className={styles.typesContainer}>
          <div className={`${styles.rowFirst} ${styles.row}`}>
            <div
              className={styles.typeContainer}
              style={{ backgroundImage: `url(${casualImg})` }}
              onClick={handleClick}
            >
              <h3 className={styles.typeTitle}>Casual</h3>
            </div>
            <div
              className={styles.typeContainer}
              style={{ backgroundImage: `url(${formalImg})` }}
              onClick={handleClick}
            >
              <h3 className={styles.typeTitle}>Formal</h3>
            </div>
          </div>
          <div className={`${styles.rowSecond} ${styles.row}`}>
            <div
              className={styles.typeContainer}
              style={{ backgroundImage: `url(${partyImg})` }}
              onClick={handleClick}
            >
              <h3 className={styles.typeTitle}>Party</h3>
            </div>
            <div
              className={styles.typeContainer}
              style={{ backgroundImage: `url(${gymImg})` }}
              onClick={handleClick}
            >
              <h3 className={styles.typeTitle}>Gym</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTypes;
