import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import {
  PROFILE_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
} from "../../utils/consts.js";
import Search from "../Search/Search.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import Svg from "../../UI/Svg/Svg.jsx";

const Navbar = () => {
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [isPromo, setIsPromo] = useState(true);

  const menu = [
    { name: "Home", path: HOME_ROUTE },
    { name: "Catalog", path: CATALOG_ROUTE },
    { name: "Catalog", path: CATALOG_ROUTE },
  ];

  const iconLinks = [
    { name: "Cart", path: CART_ROUTE, href: `${sprite}#icon-cart` },
    { name: "Profile", path: PROFILE_ROUTE, href: `${sprite}#icon-profile` },
  ];

  const toggleMenu = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };
  const toggleMoblieSearch = () => {
    setIsMobileSearch(!isMobileSearch);
  };

  const handleSearch = () => {};

  return (
    <header>
      <div className={isPromo ? styles.promo : styles.promoClosed}>
        <div className="container">
          <p>
            Sign up and get 20% off to your first order.
            <button className={styles.promoBtn}>Sign Up Now</button>
          </p>
          <button
            className={styles.promoClose}
            onClick={() => setIsPromo(false)}
          >
            <Svg href={`${sprite}#icon-close`} width={20} height={20} />
          </button>
        </div>
      </div>
      <div className={styles.headerMain}>
        <div className="container">
          <NavLink to={HOME_ROUTE}>
            <span className={styles.logo}>SHOP.CO</span>
          </NavLink>
          <nav
            className={`${styles.menu} ${isBurgerMenu ? styles.menuOpened : ""}`}
          >
            {menu.map((link) => (
              <NavLink
                to={link.path}
                key={link.path}
                className={styles.link}
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            ))}
            <button className={styles.closeBtn} onClick={toggleMenu}>
              asdasdasd
              <Svg href={`${sprite}#icon-close`} className={styles.closeBtn} />
            </button>
          </nav>
          <Search />
          <div className={styles.iconsContainer}>
            <button onClick={toggleMoblieSearch}>
              <Svg
                href={`${sprite}#icon-search`}
                classname={styles.iconSearch}
              />
            </button>
            {iconLinks.map((link) => (
              <NavLink to={link.path} key={link.path} aria-label={link.name}>
                <Svg href={link.href} classname={styles.linkIcon} />
              </NavLink>
            ))}
            <button className={styles.burgerButton} onClick={toggleMenu}>
              <Svg href={`${sprite}#icon-burger-menu`} />
            </button>
          </div>
          {isBurgerMenu && (
            <div className={styles.overlay} onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMobileSearch && (
        <div>
          <Search />
        </div>
      )}
    </header>
  );
};

export default Navbar;
