import React, { useState } from 'react'
import sprite from '../../../assets/icons/sprite.svg'
import styles from './Accordion.module.scss'

const Accordion = ({
    title,
    children,
    absolute = false,
    visible = false,
    closeOnClick = true
}) => {
    const [isOpen, setIsOpen] = useState(visible)

    const toggle = () => {
        if (closeOnClick) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <div className={styles.accordionContainer}>
            <button
                aria-label={`open ${title} menu`}
                className={styles.btn}
                onClick={toggle}
            >
                {title}
                <svg
                    className={
                        isOpen ? `${styles.icon} ${styles.active}` : styles.icon
                    }
                >
                    <use href={`${sprite}#icon-arrow`}></use>
                </svg>
            </button>
            {isOpen && (
                <div
                    onClick={toggle}
                    className={
                        absolute
                            ? `${styles.accordionContent} ${styles.absolute}`
                            : styles.accordionContent
                    }
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordion
