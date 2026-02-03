import React from 'react'
import styles from './Catalog.module.scss'
import ProductCard from '../ProductCard/ProductCard.jsx'
import Error from '../Error/Error.jsx'

const Catalog = ({ products, style = '' }) => {
    if (products.length === 0) return <h3>No products found</h3>

    return (
        <ul className={`${styles.catalog} ${style}`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    )
}

export default Catalog
