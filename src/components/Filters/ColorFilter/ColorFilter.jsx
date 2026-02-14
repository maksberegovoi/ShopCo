import React from 'react'
import styles from './ColorFilter.module.scss'
import sprite from '../../../../assets/icons/sprite.svg'

const ColorFilter = ({ colors, onSetParams, queryFilters }) => {
    return (
        <div className={styles.container}>
            {colors.map((color) => (
                <button
                    key={color.hex}
                    className={
                        queryFilters.colors?.includes(color.hex)
                            ? `${styles.color} ${styles.active}`
                            : styles.color
                    }
                    style={{ backgroundColor: color.hex }}
                    onClick={() => onSetParams('colors', color.hex)}
                    aria-label={color.name}
                    title={color.name}
                >
                    <svg
                        className={
                            queryFilters.colors?.includes(color.hex)
                                ? `${styles.iconCheckMark} ${styles.active}`
                                : styles.iconCheckMark
                        }
                    >
                        <use href={`${sprite}#icon-check-mark`}></use>
                    </svg>
                </button>
            ))}
        </div>
    )
}

export default ColorFilter
