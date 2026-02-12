import React from 'react'
import styles from './HomeSections.module.scss'
import MyButton from '../../../UI/MyButton/MyButton.jsx'
import { CATALOG_ROUTE } from '../../../utils/consts.js'
import { useGetHomeSectionsQuery } from '../../../api/categories/categoriesAPI.js'
import Error from '../../../components/Error/Error.jsx'
import Catalog from '../../../components/Catalog/Catalog.jsx'
import { HomeSectionsSkeleton } from './HomeSectionsSkeleton.jsx'
import { Link } from 'react-router-dom'

const HomeSections = () => {
    const { data, isLoading, isError, error } = useGetHomeSectionsQuery()

    if (isLoading) return <HomeSectionsSkeleton />
    if (isError) return <Error error={error} />

    return (
        <section className={'container'}>
            {data.map((category) => (
                <div key={category.title} className={styles.category}>
                    <h2>{category.title}</h2>
                    <Catalog
                        products={category.products}
                        style={styles.list}
                        isLoading={isLoading}
                    />
                    <MyButton
                        as={Link}
                        to={`${CATALOG_ROUTE}?category=${category.title}`}
                        classname={styles.categoryButton}
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
