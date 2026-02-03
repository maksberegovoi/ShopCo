import React from 'react'
import styles from '../FilterRows.module.scss'
import sprite from '../../../../assets/icons/sprite.svg'
import { useFilters } from '../../../hooks/useFilters/useFilters.js'
import Loader from '../../../UI/Loader/Loader.jsx'
import Error from '../../Error/Error.jsx'
import { useGetHomeSectionsQuery } from '../../../api/categories/categoriesAPI.js'

const CategoryFilter = ({ handler }) => {
    const { filters } = useFilters()
    const { data, isLoading, isError } = useGetHomeSectionsQuery()
    if (isLoading) return <Loader />
    if (isError) return <Error />

    const handleClick = (category) => {
        handler(category)
    }

    console.log(data)
    return (
        <div className={styles.container}>
            {data.map(({ title }, index) => (
                <button
                    key={`${title}-${index}`}
                    type="button"
                    aria-label={`type ${title}`}
                    onClick={() => handleClick(title)}
                    className={
                        filters.category === title
                            ? `${styles.option} ${styles.active}`
                            : styles.option
                    }
                >
                    {title}
                    {filters.category === title && (
                        <svg className={styles.icon}>
                            <use href={`${sprite}#icon-check-mark`}></use>
                        </svg>
                    )}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter
