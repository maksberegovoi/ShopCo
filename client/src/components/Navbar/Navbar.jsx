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
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const menu = [
    { name: "Home", path: HOME_ROUTE },
    { name: "Catalog", path: CATALOG_ROUTE },
  ];
  const iconLinks = [
    { name: "Cart", path: CART_ROUTE, href: `${sprite}#icon-cart` },
    { name: "Profile", path: PROFILE_ROUTE, href: `${sprite}#icon-profile` },
  ];
  return (
    <header className={styles.header}>
      <NavLink to={HOME_ROUTE}>
        <span className={styles.logo}>SHOP.CO</span>
      </NavLink>
      <nav className={isBurgerMenu ? styles.menuOpened : styles.menu}>
        {menu.map((link) => (
          <NavLink to={link.path} key={link.path} className={styles.link}>
            {link.name}
          </NavLink>
        ))}
        <button
          className={styles.closeBtn}
          onClick={() => setIsBurgerMenu(false)}
        >
          <Svg href={`${sprite}#icon-close`} />
        </button>
      </nav>
      <Search />
      <div className={styles.iconsContainer}>
        {iconLinks.map((link) => (
          <NavLink to={link.path} key={link.path} aria-label={link.name}>
            <Svg href={link.href} classname={styles.linkIcon} />
          </NavLink>
        ))}
        <button
          className={styles.burgerButton}
          onClick={() => setIsBurgerMenu(true)}
        >
          <Svg href={`${sprite}#icon-burger-menu`} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
