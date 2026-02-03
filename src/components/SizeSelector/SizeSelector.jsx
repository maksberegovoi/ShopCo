import React from 'react'
import styles from './SizeSelector.module.scss'

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
    return (
        <div className={styles.container}>
            <p>Choose Size</p>
            <div className={styles.sizeOptions}>
                {sizes.map((size) => (
                    <button
                        disabled={!size.available}
                        key={size.name}
                        className={`${styles.size} ${
                            selectedSize === size.name ? styles.active : ''
                        }`}
                        onClick={() => onSizeChange(size.name)}
                    >
                        {size.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SizeSelector
