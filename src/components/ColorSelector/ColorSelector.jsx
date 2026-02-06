import React from 'react'
import styles from './ColorSelector.module.scss'
import sprite from '../../../assets/icons/sprite.svg'

const ColorSelector = ({
    baseAvailableColors,
    availableColors,
    selectedColor,
    onSelectColor
}) => {
    const colors =
        availableColors?.length > 0 ? availableColors : baseAvailableColors
    return (
        <div className={styles.colorSelector}>
            <p>Select Color</p>
            <div className={styles.colorOptions}>
                {colors.map((color) => {
                    return (
                        <button
                            key={color.hex}
                            disabled={!color.isAvailable}
                            className={`${styles.colorSwatch} ${
                                selectedColor === color.hex ? styles.active : ''
                            }`}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => onSelectColor(color.hex)}
                        >
                            {!color.isAvailable && (
                                <svg className={styles.iconNotAvailiable}>
                                    <use href={`${sprite}#icon-close`} />
                                </svg>
                            )}

                            <svg
                                className={
                                    selectedColor === color.hex
                                        ? `${styles.iconCheckMark} ${styles.active}`
                                        : styles.iconCheckMark
                                }
                            >
                                <use href={`${sprite}#icon-check-mark`} />
                            </svg>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ColorSelector
