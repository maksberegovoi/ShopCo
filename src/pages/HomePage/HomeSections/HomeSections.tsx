import React from 'react'
import styles from './HomeSections.module.scss'
import MyButton from '../../../UI/MyButton/MyButton'
import { CATALOG_ROUTE } from '../../../utils/consts'
import { useGetHomeSectionsQuery } from '../../../api/categories/categoriesAPI'
import Error from '../../../components/Error/Error'
import Catalog from '../../../components/Catalog/Catalog'
import { HomeSectionsSkeleton } from './HomeSectionsSkeleton'
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
                        to={`${CATALOG_ROUTE}?category=${category.categoryId}`}
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
