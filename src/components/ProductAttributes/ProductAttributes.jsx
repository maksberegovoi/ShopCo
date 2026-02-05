import React from 'react'
import styles from './ProductAttributes.module.scss'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error.jsx'
import { useGetProductAttributesQuery } from '../../api/products/productsAPI.js'
import { ProductAttributesSkeleton } from './ProductAttributesSkeleton.jsx'

const ProductAttributes = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useGetProductAttributesQuery(id)

    if (isLoading) return <ProductAttributesSkeleton />
    if (isError) return <Error error={error} />

    return (
        <div className={styles.container}>
            {data.map(({ title, attributes }, index) => (
                <dl key={`${title}-${index}`} className={styles.column}>
                    <h5 className={styles.colTitle}>{title}</h5>
                    {attributes?.map(({ name, value }, index) => (
                        <div key={`${name}-${index}`} className={styles.row}>
                            <dt className={styles.title}>{name}</dt>
                            <dd className={styles.value}>{value}</dd>
                        </div>
                    ))}
                </dl>
            ))}
        </div>
    )
}

export default ProductAttributes
