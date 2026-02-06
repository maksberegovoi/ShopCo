import React, { useEffect, useRef, useState } from 'react'
import styles from './PriceFilter.module.scss'
import { useFilters } from '../../../hooks/useFilters/useFilters.js'

const PriceFilter = ({ handler }) => {
    const rangeRef = useRef(null)
    const valueRef = useRef(null)
    const { filters } = useFilters()
    const [price, setPrice] = useState(1) // MaxPrice constant

    const handleChange = (e) => {
        setPrice(e.target.value)
        updatePosition(e.target)
    }

    const handleMouseUp = () => {
        handler(price)
    }

    const updatePosition = (inputEl) => {
        if (!valueRef.current || !rangeRef.current) return

        const { min, max, value, offsetWidth } = inputEl
        const percent = (value - min) / (max - min)

        const thumbWidth = rangeRef.current.offsetWidth
        const newLeft = percent * offsetWidth - thumbWidth / 2

        rangeRef.current.style.left = `${newLeft}px`
    }

    useEffect(() => {
        setPrice(filters.maxPrice)
    }, [filters.maxPrice])

    useEffect(() => {
        if (valueRef.current) {
            updatePosition(valueRef.current)
        }
    }, [])

    const maxProductPrice = 1

    return (
        <div className={styles.content}>
            <p>1$</p>
            <input
                type="range"
                min="1"
                max={maxProductPrice}
                step="1"
                value={price}
                ref={valueRef}
                onChange={handleChange}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleMouseUp}
                className={styles.range}
            />
            <p>{maxProductPrice}$</p>
            <span className={styles.rangeValue} ref={rangeRef}>
                {price}$
            </span>
        </div>
    )
}

export default PriceFilter
