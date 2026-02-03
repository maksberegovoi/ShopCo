import React from 'react'
import styles from './ProductCharacteristics.module.scss'
import Loader from '../../UI/Loader/Loader.jsx'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error.jsx'

const ProductCharacteristics = () => {
    const { id } = useParams()
    const { isLoading, isError, details = [] } = {} // TODO: fix this
    if (isLoading) return <Loader />
    if (isError) return <Error />

    return (
        <div className={styles.container}>
            {details.map((detail) => (
                <dl key={detail.title} className={styles.column}>
                    <h5 className={styles.colTitle}>{detail.title}</h5>
                    {detail.info.map((item) => (
                        <div key={item.value} className={styles.row}>
                            <dt className={styles.title}>{item.key}</dt>
                            <dd className={styles.value}>{item.value}</dd>
                        </div>
                    ))}
                </dl>
            ))}
        </div>
    )
}

export default ProductCharacteristics
