import React, { useRef } from 'react'
import styles from './Footer.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import { NavLink } from 'react-router-dom'
import { badges, columns, HOME_ROUTE, socials } from '../../utils/consts.js'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import toast from 'react-hot-toast'
import { z } from 'zod'

const Footer = () => {
    const ref = useRef(null)

    const emailSchema = z.string().email('Некорректный формат email')

    const onSubcribe = () => {
        if (!ref.current) return
        const emailValue = ref.current.value
        const result = emailSchema.safeParse(emailValue)

        if (!result.success) {
            const errorMessage =
                result.error?.errors?.[0]?.message || 'Invalid email'
            toast.error(errorMessage)
            return
        }

        ref.current.value = ''
        toast.success('Subscribed!')
    }

    return (
        <footer className={`container`}>
            <div className={styles.subscription}>
                <h2 className={styles.subscriptionTitle}>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h2>
                <div className={styles.emailWrapper}>
                    <div className={styles.emailContainer}>
                        <svg className={styles.iconEmail}>
                            <use href={`${sprite}#icon-mail`}></use>
                        </svg>
                        <input
                            type="email"
                            ref={ref}
                            className={styles.emailInput}
                            placeholder={'Enter your email address'}
                        />
                    </div>
                    <MyButton
                        onClick={onSubcribe}
                        classname={styles.mailButton}
                    >
                        Subscribe to Newsletter
                    </MyButton>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    <NavLink to={HOME_ROUTE}>
                        <span className="logo">SHOP.CO</span>
                    </NavLink>
                    <p>
                        We have clothes that suits your style and which you’re
                        proud to wear. From women to men.
                    </p>
                    <div className={styles.socials}>
                        {socials.map((social) => (
                            <NavLink
                                key={social.name}
                                to={social.href}
                                aria-label={social.name}
                                className={styles.socialLink}
                            >
                                <svg className={styles.iconSocial}>
                                    <use href={social.icon}></use>
                                </svg>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className={styles.columnsContainer}>
                    <ul className={styles.columns}>
                        {columns.map((column) => (
                            <li key={column.title} className={styles.column}>
                                <h4 className={styles.columnTitle}>
                                    {column.title}
                                </h4>
                                <div className={styles.columnLinks}>
                                    {column.links.map((link) => (
                                        <NavLink
                                            className={styles.columnLink}
                                            key={link.name}
                                        >
                                            {link.name}
                                        </NavLink>
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
                        <svg key={badge.name} className={styles.iconBadge}>
                            <use href={badge.icon}></use>
                        </svg>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
