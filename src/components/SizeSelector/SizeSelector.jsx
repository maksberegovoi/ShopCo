import React from 'react'
import styles from './SizeSelector.module.scss'

const SizeSelector = ({ sizes, selectedSize, onSelectSize }) => {
    return (
        <div className={styles.container}>
            <p>Choose Size</p>
            <div className={styles.sizeOptions}>
                {sizes.map((size) => {
                    return (
                        <button
                            key={size.name}
                            disabled={!size.isAvailable}
                            className={`${styles.size} ${
                                selectedSize === size.name ? styles.active : ''
                            }`}
                            onClick={() => onSelectSize(size.name)}
                        >
                            {size.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default SizeSelector
