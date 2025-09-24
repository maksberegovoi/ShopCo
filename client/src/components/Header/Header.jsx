import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {
  PROFILE_ROUTE,
  CART_ROUTE,
  HOME_ROUTE,
  CATALOG_ROUTE,
} from "../../utils/consts.js";
import Search from "../Search/Search.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import Svg from "../../UI/Svg/Svg.jsx";
import Accordion from "../Accordion/Accordion.jsx";

const Header = () => {
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [isPromo, setIsPromo] = useState(true);

  const menu = [
    { name: "Home", path: HOME_ROUTE },
    { name: "Catalog", path: CATALOG_ROUTE },
  ];

  const dropdownLinks = [
    { name: "Men", path: HOME_ROUTE },
    { name: "Women", path: HOME_ROUTE },
    { name: "Kids", path: HOME_ROUTE },
  ];

  const iconLinks = [
    { name: "Cart", path: CART_ROUTE, href: `${sprite}#icon-cart` },
    { name: "Profile", path: PROFILE_ROUTE, href: `${sprite}#icon-profile` },
  ];

  const toggleMenu = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };
  const toggleMobileSearch = () => {
    setIsMobileSearch(!isMobileSearch);
  };

  useEffect(() => {
    const mobileModal = () => {
      if (window.innerWidth > 768) {
        setIsMobileSearch(false);
        setIsBurgerMenu(false);
      }
    };
    window.addEventListener("resize", mobileModal);

    return () => {
      window.removeEventListener("resize", mobileModal);
    };
  }, []);

  return (
    <header>
      <div className={isPromo ? styles.promo : styles.promoClosed}>
        <div className={`${styles.promoContainer} container`}>
          <p>
            Sign up and get 20% off to your first order.
            <button className={styles.promoBtn}>Sign Up Now</button>
          </p>
          <button
            className={styles.promoClose}
            onClick={() => setIsPromo(false)}
            aria-label="close promo"
          >
            <Svg href={`${sprite}#icon-close`} width={20} height={20} />
          </button>
        </div>
      </div>
      <div className={`${styles.headerMain} container`}>
        <button
          className={styles.burgerButton}
          onClick={toggleMenu}
          aria-label="open menu"
        >
          <Svg href={`${sprite}#icon-burger-menu`} />
        </button>
        <NavLink to={HOME_ROUTE}>
          <span className={styles.logo}>SHOP.CO</span>
        </NavLink>
        <div
          className={`${styles.navContainer} ${isBurgerMenu ? styles.mobileNav : ""}`}
        >
          {isBurgerMenu && (
            <NavLink to={HOME_ROUTE}>
              <span className={styles.logo}>SHOP.CO</span>
            </NavLink>
          )}
          {isBurgerMenu && <Search />}
          <nav className={styles.menu}>
            <Accordion title={"Shop"} absolute={!isBurgerMenu}>
              {dropdownLinks.map((link) => (
                <div key={link.name} className={styles.dropdownContainer}>
                  <NavLink to={link.path} className={styles.link}>
                    {link.name}
                  </NavLink>
                  <Svg
                    href={`${sprite}#icon-arrow`}
                    width={16}
                    height={16}
                    styles={styles.dropdownIcon}
                  />
                </div>
              ))}
            </Accordion>
            {menu.map((link) => (
              <NavLink
                to={link.path}
                key={link.path}
                className={styles.link}
                onClick={isBurgerMenu && toggleMenu}
              >
                {link.name}
              </NavLink>
            ))}
            <button
              type="button"
              className={styles.closeBtn}
              onClick={toggleMenu}
              aria-label="close menu"
            >
              <Svg
                href={`${sprite}#icon-close`}
                width={20}
                height={20}
                styles={styles.closeBtn}
              />
            </button>
          </nav>
        </div>
        <div className={styles.searchDesktopContainer}>
          <Search />
        </div>
        <div className={styles.iconsContainer}>
          <button onClick={toggleMobileSearch} aria-label="search button">
            <Svg href={`${sprite}#icon-search`} styles={styles.iconSearch} />
          </button>
          {iconLinks.map((link) => (
            <NavLink to={link.path} key={link.path} aria-label={link.name}>
              <Svg href={link.href} styles={styles.linkIcon} />
            </NavLink>
          ))}
        </div>
      </div>
      {isBurgerMenu && <div className={styles.overlay} onClick={toggleMenu} />}
      {isMobileSearch && (
        <div className={`${styles.searchMobileContainer} container`}>
          <Search />
        </div>
      )}
    </header>
  );
};

export default Header;
