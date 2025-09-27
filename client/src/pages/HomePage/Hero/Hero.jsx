import React from "react";
import styles from "./Hero.module.scss";
import MyButton from "../../../UI/MyButton/MyButton.jsx";
import heroBg from "../../../../assets/backgroundImages/herobg.png";
import { CATALOG_ROUTE } from "../../../utils/consts.js";

const Hero = () => {
  const metrics = [
    { title: "200+", description: "International Brands" },
    { title: "2,000+", description: "High-Quality Products" },
    { title: "30,000+", description: "Happy Customers" },
  ];

  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className={styles.heroDescription}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <MyButton to={CATALOG_ROUTE} classname={styles.heroBtn}>
            Shop Now
          </MyButton>
          <dl className={styles.metrics}>
            {metrics.map((metric) => (
              <div className={styles.metricsColumn}>
                <dt className={styles.metricsTitle}>{metric.title}</dt>
                <dd className={styles.metricsdesc}>{metric.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img className={styles.heroImage} src={heroBg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
