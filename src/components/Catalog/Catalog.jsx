import React from 'react'
import styles from './Catalog.module.scss'
import ProductCard from '../ProductCard/ProductCard.jsx'

const Catalog = ({ products, style = '' }) => {
    if (!products.length)
        return <h6 className={styles.noProductsTitle}>No products found</h6>

    return (
        <ul className={`${styles.catalog} ${style}`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    )
}

export default Catalog
