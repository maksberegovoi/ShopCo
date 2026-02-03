import React from 'react'
import styles from './HomeSections.module.scss'
import MyButton from '../../../UI/MyButton/MyButton.jsx'
import { CATALOG_ROUTE } from '../../../utils/consts.js'
import { useGetHomeSectionsQuery } from '../../../api/categories/categoriesAPI.js'
import Loader from '../../../UI/Loader/Loader.jsx'
import Error from '../../../components/Error/Error.jsx'
import Catalog from '../../../components/Catalog/Catalog.jsx'

const HomeSections = () => {
    const { data, isLoading, isError } = useGetHomeSectionsQuery()

    if (isLoading) return <Loader />
    if (isError) return <Error />

    return (
        <section className={'container'}>
            {data?.map((category) => (
                <div key={category.title} className={styles.category}>
                    <h2>{category.title}</h2>
                    <Catalog products={category.products} style={styles.list} />
                    <MyButton
                        to={`${CATALOG_ROUTE}?category=${category.title}`}
                        classname={styles.categoryButton}
                        color={'white'}
                        aria-label={`View ${category.title} products`}
                    >
                        View All
                    </MyButton>
                </div>
            ))}
        </section>
    )
}

export default HomeSections
