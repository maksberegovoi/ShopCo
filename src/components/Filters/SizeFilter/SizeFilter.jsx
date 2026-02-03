import React from 'react'
import styles from '../FilterButtons.module.scss'
import { useFilters } from '../../../hooks/useFilters/useFilters.js'
import { sizeMap } from '../../../utils/consts.js'

const SizeFilter = ({ handler }) => {
    const { filters } = useFilters()

    const handleClick = (size) => {
        handler(size)
    }

    return (
        <div className={styles.container}>
            {sizeMap.map((size) => (
                <button
                    key={size}
                    onClick={() => handleClick(size)}
                    className={
                        filters.sizes.includes(size)
                            ? `${styles.btn} ${styles.active}`
                            : styles.btn
                    }
                    type="button"
                    aria-label={size}
                >
                    {size}
                </button>
            ))}
        </div>
    )
}

export default SizeFilter
