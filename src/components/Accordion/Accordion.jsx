import React, { useEffect, useRef, useState } from 'react'
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
    const ref = useRef(null)

    const toggle = () => {
        if (closeOnClick) {
            setIsOpen(!isOpen)
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={styles.accordionContainer} ref={ref}>
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
