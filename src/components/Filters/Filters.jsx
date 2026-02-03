import React from 'react'
import styles from './Filters.module.scss'
import StyleFilter from './StyleFilter/StyleFilter.jsx'
import SizeFilter from './SizeFilter/SizeFilter.jsx'
import ColorFilter from './ColorFilter/ColorFilter.jsx'
import PriceFilter from './PriceFilter/PriceFilter.jsx'
import TypeFilter from './TypeFilter/TypeFilter.jsx'
import sprite from '../../../assets/icons/sprite.svg'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { useFilters } from '../../hooks/useFilters/useFilters.js'
import BrandFilter from './BrandFilter/BrandFilter.jsx'
import CategoryFilter from './CategoryFilter/CategoryFilter.jsx'

const Filters = ({ isOpen, handleClick }) => {
    const {
        resetFilters,
        toggleType,
        toggleStyle,
        toggleColor,
        toggleBrand,
        toggleSize,
        toggleCategory,
        setMaxPrice
    } = useFilters()

    const filters = [
        {
            name: 'Category',
            Component: CategoryFilter,
            handler: toggleCategory
        },
        { name: 'Type', Component: TypeFilter, handler: toggleType },
        { name: 'Price', Component: PriceFilter, handler: setMaxPrice },
        { name: 'Color', Component: ColorFilter, handler: toggleColor },
        { name: 'Size', Component: SizeFilter, handler: toggleSize },
        { name: 'Brand', Component: BrandFilter, handler: toggleBrand },
        { name: 'Style', Component: StyleFilter, handler: toggleStyle }
    ]

    return (
        <div
            className={
                isOpen
                    ? `${styles.filterBox} ${styles.isOpen}`
                    : styles.filterBox
            }
        >
            <div className={styles.title}>
                <h4>Filters</h4>
                <button
                    aria-label="close filters"
                    onClick={() => handleClick()}
                >
                    <svg className={styles.iconClose}>
                        <use href={`${sprite}#icon-close`}></use>
                    </svg>
                </button>
            </div>
            <div className={styles.content}>
                {filters.map((filter) => {
                    const { name, Component, handler } = filter

                    return (
                        <div key={name} className={styles.filterWrapper}>
                            <h6>{name}</h6>
                            <Component handler={handler} />
                        </div>
                    )
                })}
                <MyButton
                    handleClick={() => resetFilters()}
                    classname={styles.resetFiltersBtn}
                >
                    Reset Filters
                </MyButton>
            </div>
            <MyButton handleClick={() => handleClick()} color={'white'}>
                Close
            </MyButton>
        </div>
    )
}

export default Filters
