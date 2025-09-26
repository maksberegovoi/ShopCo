import React from "react";
import styles from "./Footer.module.scss";
import Svg from "../../UI/Svg/Svg.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts.js";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const Footer = () => {
  const columns = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/" },
        { name: "Features", path: "/" },
        { name: "Works", path: "/" },
        { name: "Career", path: "/" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Customer Support", path: "/" },
        { name: "Delivery Details", path: "/" },
        { name: "Terms & Conditions", path: "/" },
        { name: "Privacy Policy", path: "/" },
      ],
    },
    {
      title: "Faq",
      links: [
        { name: "Account", path: "/" },
        { name: "Manage Delivers", path: "/" },
        { name: "Orders", path: "/" },
        { name: "Payments", path: "/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Free eBooks", path: "/" },
        { name: "Development Tutorial", path: "/" },
        { name: "How to - Blog", path: "/" },
        { name: "Youtube Playlist", path: "/" },
      ],
    },
  ];

  const socials = [
    { name: "Twitter", icon: `${sprite}#icon-twitter`, href: "/" },
    { name: "Facebook", icon: `${sprite}#icon-facebook`, href: "/" },
    { name: "Instagram", icon: `${sprite}#icon-instagram`, href: "/" },
    { name: "Github", icon: `${sprite}#icon-github`, href: "/" },
  ];

  const badges = [
    { name: "Visa", icon: `${sprite}#icon-visa` },
    { name: "MasterCard", icon: `${sprite}#icon-mastercard` },
    { name: "PayPal", icon: `${sprite}#icon-paypal` },
    { name: "GooglePay", icon: `${sprite}#icon-google-pay` },
    { name: "ApplePay", icon: `${sprite}#icon-apple-pay` },
  ];

  return (
    <footer className={`container`}>
      <div className={styles.subscription}>
        <h2 className={styles.subscriptionTitle}>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className={styles.emailWrapper}>
          <div className={styles.emailContainer}>
            <Svg href={`${sprite}#icon-mail`} />
            <input type="text" placeholder={"Enter your email address"} />
          </div>
          <MyButton classname={styles.mailButton}>
            Subscribe to Newsletter
          </MyButton>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <NavLink to={HOME_ROUTE}>
            <span className="logo">SHOP.CO</span>
          </NavLink>
          <p className={styles.text}>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className={styles.socials}>
            {socials.map((social) => (
              <NavLink
                to={social.href}
                aria-label={social.name}
                className={styles.socialLink}
              >
                <Svg href={social.icon} width={20} height={20}></Svg>
              </NavLink>
            ))}
          </div>
        </div>
        <div className={styles.columnsContainer}>
          <ul className={styles.columns}>
            {columns.map((column) => (
              <li className={styles.column}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <div className={styles.columnLinks}>
                  {column.links.map((link) => (
                    <NavLink className={styles.columnLink}>{link.name}</NavLink>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.subFooter}>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className={styles.badges}>
          {badges.map((badge) => (
            <Svg href={badge.icon} width={40} height={25} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
