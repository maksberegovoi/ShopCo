import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { CART_ROUTE, HOME_ROUTE, CATALOG_ROUTE } from "../../utils/consts.js";
import Search from "../Search/Search.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import Accordion from "../Accordion/Accordion.jsx";

const Header = () => {
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [isPromo, setIsPromo] = useState(true);
  const [isAccordion, setIsAccordion] = useState(false);

  const menu = [
    { name: "Home", path: HOME_ROUTE },
    { name: "Catalog", path: CATALOG_ROUTE },
  ];

  const dropdownLinks = [
    { name: "Men", path: `${CATALOG_ROUTE}?gender=male` },
    { name: "Women", path: `${CATALOG_ROUTE}?gender=female` },
    { name: "Unisex", path: `${CATALOG_ROUTE}?gender=unisex` },
  ];

  const iconLinks = [
    { name: "Cart", path: CART_ROUTE, href: `${sprite}#icon-cart` },
    // { name: "Profile", path: "*", href: `${sprite}#icon-profile` },
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
          <button onClick={() => setIsPromo(false)} aria-label="close promo">
            <svg className={styles.iconPromoClose}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${styles.headerMain} container`}>
        <button
          className={styles.burgerButton}
          onClick={toggleMenu}
          aria-label="open menu"
        >
          <svg className={styles.iconMenu}>
            <use href={`${sprite}#icon-burger-menu`}></use>
          </svg>
        </button>
        <NavLink to={HOME_ROUTE}>
          <span className="logo">SHOP.CO</span>
        </NavLink>
        <div
          className={`${styles.navContainer} ${isBurgerMenu ? styles.mobileNav : ""}`}
        >
          {isBurgerMenu && (
            <NavLink to={HOME_ROUTE}>
              <span className={"logo"}>SHOP.CO</span>
            </NavLink>
          )}
          {isBurgerMenu && <Search />}
          <nav className={styles.menu}>
            <Accordion
              title={"Shop for"}
              absolute={!isBurgerMenu}
              visible={isAccordion}
            >
              {dropdownLinks.map((link) => (
                <div key={link.name} className={styles.dropdownContainer}>
                  <NavLink
                    to={link.path}
                    className={styles.link}
                    onClick={() => setIsAccordion(!isAccordion)}
                  >
                    {link.name}
                    <svg className={styles.iconArrowRight}>
                      <use href={`${sprite}#icon-arrow`}></use>
                    </svg>
                  </NavLink>
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
            <button type="button" onClick={toggleMenu} aria-label="close menu">
              <svg className={styles.iconClose}>
                <use href={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          </nav>
        </div>
        <div className={styles.searchDesktopContainer}>
          <Search />
        </div>
        <div className={styles.iconsContainer}>
          <button onClick={toggleMobileSearch} aria-label="search button">
            <svg className={styles.iconSearch}>
              <use href={`${sprite}#icon-search`}></use>
            </svg>
          </button>
          {iconLinks.map((link) => (
            <NavLink to={link.path} key={link.path} aria-label={link.name}>
              <svg className={styles.iconLink}>
                <use href={link.href}></use>
              </svg>
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
