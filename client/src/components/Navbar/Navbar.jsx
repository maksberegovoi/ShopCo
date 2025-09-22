import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {
  PROFILE_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE
} from "../../utils/consts.js";
import Search from "../Search/Search.jsx";
import profileIcon from '../../../assets/icons/profile.svg'
import cartIcon from '../../../assets/icons/cart.svg'


const Navbar = () => {
  const menu = [
    {name: 'Home', path: HOME_ROUTE},
    {name: 'Catalog', path: CATALOG_ROUTE},
  ]
  const iconLinks = [
    {name: 'Cart', path: CART_ROUTE, src: cartIcon},
    {name: 'Profile', path: PROFILE_ROUTE, src: profileIcon},
  ]
  return (
    <header className={styles.header}>
      <NavLink to={HOME_ROUTE}>
        <span className={styles.logo}>SHOP.CO</span>
      </NavLink>
      <nav>
        {menu.map(link => <NavLink to={link.path} key={link.path}>{link.name}</NavLink>)}
      </nav>
      <Search/>
      <div  className={styles.iconsContainer}>
        {iconLinks.map(link =>
          <NavLink to={link.path} key={link.path} aria-label={link.name}>
          <img
            src={link.src}
            alt={link.name}
          /></NavLink>)}
      </div>
    </header>
  );
};

export default Navbar;