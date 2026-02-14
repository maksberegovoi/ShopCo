import React from 'react'
import styles from './Filters.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { useGetProductFiltersQuery } from '../../api/products/productsAPI.js'
import Error from '../Error/Error.jsx'
import PriceFilter from './PriceFilter/PriceFilter.jsx'
import ColorFilter from './ColorFilter/ColorFilter.jsx'
import Loader from '../../UI/Loader/Loader.jsx'
import FiltersSkeleton from './FiltersSkeleton.jsx'

const Filters = ({
    isOpen,
    handleClick,
    onSetParams,
    setSingleParam,
    queryFilters,
    resetFilters
}) => {
    const {
        data: filters,
        isLoading,
        isError,
        error
    } = useGetProductFiltersQuery()
    if (isLoading) return <FiltersSkeleton />
    if (isError) return <Error error={error} />

    return (
        <div
            className={
                isOpen
                    ? `${styles.filterBox} ${styles.isOpen}`
                    : styles.filterBox
            }
        >
            <div className={styles.title}>
                <h3>Filters</h3>
                <button
                    aria-label="close filters"
                    onClick={() => handleClick()}
                >
                    <svg className={styles.iconClose}>
                        <use href={`${sprite}#icon-close`}></use>
                    </svg>
                </button>
            </div>
            <ul className={styles.filters}>
                <li className={styles.column}>
                    <p className={styles.filterTitle}>Price</p>
                    <PriceFilter
                        maxPrice={filters.maxPrice}
                        setSingleParam={setSingleParam}
                    />
                </li>
                <li className={styles.column}>
                    <p className={styles.filterTitle}>Color</p>
                    <ColorFilter
                        colors={filters.colors}
                        onSetParams={onSetParams}
                        queryFilters={queryFilters}
                    />
                </li>
                {filters?.primitives?.map((filter) => {
                    return (
                        <li key={filter.name} className={styles.column}>
                            <p className={styles.filterTitle}>{filter.name}</p>
                            <ul className={styles.filterItems}>
                                {filter.items?.map(({ id, name }) => (
                                    <li key={id} className={styles.filterItem}>
                                        <MyButton
                                            onClick={() =>
                                                onSetParams(filter.name, id)
                                            }
                                            classname={`${styles.filterBtn} ${
                                                queryFilters[
                                                    `${filter.name}Ids`
                                                ]?.includes(id)
                                                    ? styles.active
                                                    : ''
                                            }`}
                                        >
                                            {name}
                                        </MyButton>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )
                })}
                <MyButton onClick={() => resetFilters()}>
                    Reset Filters
                </MyButton>
            </ul>
            <MyButton onClick={() => handleClick()}>Close</MyButton>
        </div>
    )
}

export default Filters
