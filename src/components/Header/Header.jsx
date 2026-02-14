import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import {
    CART_ROUTE,
    HOME_ROUTE,
    CATALOG_ROUTE,
    SIGNUP_ROUTE,
    PROFILE_ROUTE
} from '../../utils/consts.js'
import Search from '../Search/Search.jsx'
import sprite from '../../../assets/icons/sprite.svg'
import Accordion from '../Accordion/Accordion.jsx'
import { useDeviceType } from '../../hooks/useDeviceType.js'
import { ThemeSwitcher } from '../../UI/ThemeSwitcher/ThemeSwitcher.jsx'
import { useSelector } from 'react-redux'
import { getIsAuth } from '../../redux/features/user/selectors/selectors.js'

const menu = [
    { name: 'Home', path: HOME_ROUTE },
    { name: 'Catalog', path: CATALOG_ROUTE }
]
const dropdownLinks = [
    { name: 'Men', path: `${CATALOG_ROUTE}?gender=MALE` },
    { name: 'Women', path: `${CATALOG_ROUTE}?gender=FEMALE` },
    { name: 'Unisex', path: `${CATALOG_ROUTE}?gender=UNISEX` }
]
const iconLinks = [
    { name: 'Cart', path: CART_ROUTE, href: `${sprite}#icon-cart` },
    { name: 'Profile', path: PROFILE_ROUTE, href: `${sprite}#icon-profile` }
]

const Header = () => {
    const { isMobile } = useDeviceType()
    const [isMobileSearch, setIsMobileSearch] = useState(false)
    const [isBurgerMenu, setIsBurgerMenu] = useState(false)
    const [isPromo, setIsPromo] = useState(true)
    const [isAccordion, setIsAccordion] = useState(false)
    const isAuth = useSelector(getIsAuth)

    const toggleMenu = () => {
        setIsBurgerMenu(!isBurgerMenu)
    }
    const toggleMobileSearch = () => {
        setIsMobileSearch(!isMobileSearch)
    }

    useEffect(() => {
        if (!isMobile) {
            setIsMobileSearch(false)
            setIsBurgerMenu(false)
        }
    }, [isMobile])

    return (
        <header>
            {!isAuth && (
                <div className={isPromo ? styles.promo : styles.promoClosed}>
                    <div className={`${styles.promoContainer} container`}>
                        <p>
                            Sign up and get 20% off to your first order.
                            <NavLink
                                to={SIGNUP_ROUTE}
                                className={styles.promoBtn}
                            >
                                Sign Up Now
                            </NavLink>
                        </p>
                        <button
                            onClick={() => setIsPromo(false)}
                            aria-label="close promo"
                        >
                            <svg className={styles.iconPromoClose}>
                                <use href={`${sprite}#icon-close`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
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
                    className={`${styles.navContainer} ${isBurgerMenu ? styles.mobileNav : ''}`}
                >
                    {isBurgerMenu && (
                        <NavLink to={HOME_ROUTE}>
                            <span className={'logo'}>SHOP.CO</span>
                        </NavLink>
                    )}
                    <nav className={styles.menu}>
                        <Accordion
                            title={'Shop for'}
                            absolute={!isBurgerMenu}
                            visible={isAccordion}
                        >
                            {dropdownLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className={styles.dropdownContainer}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={styles.link}
                                        onClick={() =>
                                            setIsAccordion(!isAccordion)
                                        }
                                    >
                                        {link.name}
                                        <svg className={styles.iconArrowRight}>
                                            <use
                                                href={`${sprite}#icon-arrow`}
                                            ></use>
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
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label="close menu"
                            className={styles.iconClose}
                        >
                            <svg>
                                <use href={`${sprite}#icon-close`}></use>
                            </svg>
                        </button>
                    </nav>
                </div>
                <div className={styles.searchDesktopContainer}>
                    <Search />
                </div>
                <div className={styles.iconsContainer}>
                    <button
                        onClick={toggleMobileSearch}
                        aria-label="search button"
                    >
                        <svg className={styles.iconSearch}>
                            <use href={`${sprite}#icon-search`}></use>
                        </svg>
                    </button>
                    <ThemeSwitcher />
                    {iconLinks.map((link) => (
                        <NavLink
                            to={link.path}
                            key={link.path}
                            aria-label={link.name}
                        >
                            <svg className={styles.iconLink}>
                                <use href={link.href}></use>
                            </svg>
                        </NavLink>
                    ))}
                </div>
            </div>
            {isBurgerMenu && (
                <div className={styles.overlay} onClick={toggleMenu} />
            )}
            {isMobileSearch && (
                <div className={`${styles.searchMobileContainer} container`}>
                    <Search />
                </div>
            )}
        </header>
    )
}

export default Header
