import React, { useState } from 'react'
import { Range } from 'react-range'
import styles from './PriceFilter.module.scss'

const PriceFilter = ({ maxPrice, setSingleParam }) => {
    const [value, setValue] = useState([maxPrice])

    return (
        <div className={styles.rangeWrapper}>
            <span className={styles.minPrice}>1$</span>
            <Range
                step={1}
                min={1}
                max={maxPrice}
                values={value}
                onChange={(values) => setValue(values)}
                onFinalChange={(values) =>
                    setSingleParam('maxPrice', values[0])
                }
                renderTrack={({ props, children }) => (
                    <div {...props} className={styles.track}>
                        <div
                            className={styles.trackFilled}
                            style={{
                                width: `${(value[0] / maxPrice) * 100}%`
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => {
                    const { key, ...rest } = props
                    return (
                        <div
                            key={key}
                            {...rest}
                            className={styles.thumbWrapper}
                        >
                            <div className={styles.thumb} />
                            <div className={styles.value}>{value[0]}$</div>
                        </div>
                    )
                }}
            />

            <span className={styles.maxPrice}>{maxPrice}$</span>
        </div>
    )
}

export default PriceFilter
