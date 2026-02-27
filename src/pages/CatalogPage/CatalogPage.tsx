import React, { useEffect, useRef, useState, type ChangeEvent } from 'react'
import styles from './CatalogPage.module.scss'
import Filters from '../../components/Filters/Filters'
import Error from '../../components/Error/Error'
import { useFilters } from '../../hooks/useFilters/useFilters'
import Pagination from '../../UI/Pagination/Pagination'
import Accordion from '../../components/Accordion/Accordion'
import sprite from '../../../assets/icons/sprite.svg'
import Catalog from '../../components/Catalog/Catalog'
import { useGetProductsQuery } from '../../api/products/productsAPI'
import { useDeviceType } from '../../hooks/useDeviceType'
import { CatalogPageSkeleton } from './CatalogPageSkeleton'

const CatalogPage = () => {
    const { isDesktop } = useDeviceType()
    const [isFilters, setIsFilters] = useState(false)
    const [sortTitle, setSortTitle] = useState('Most popular')
    const isManualToggle = useRef(false)
    const {
        queryFilters,
        setSingleParam,
        onSetParams,
        resetFilters,
        page,
        limit
    } = useFilters()
    const { data, isLoading, isError } = useGetProductsQuery({
        ...queryFilters
    })

    const toggleFilters = () => {
        isManualToggle.current = true
        setIsFilters(!isFilters)
    }

    const handleSort = (e: ChangeEvent<HTMLInputElement>, sortBy: string) => {
        setSortTitle(e.target.textContent)
        setSingleParam('sortBy', sortBy)
    }

    useEffect(() => {
        const html = document.documentElement
        const prevScrollBehavior = html.style.scrollBehavior

        html.style.scrollBehavior = 'smooth'
        window.scrollTo({ top: 0 })

        return () => {
            html.style.scrollBehavior = prevScrollBehavior
        }
    }, [queryFilters.page])

    useEffect(() => {
        if (!isManualToggle.current) {
            setIsFilters(isDesktop)
        }
    }, [isDesktop])

    useEffect(() => {
        if (isFilters && !isDesktop) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isFilters, isDesktop])

    if (isLoading) return <CatalogPageSkeleton />
    if (isError) return <Error />

    return (
        <section className={`container`}>
            <div className={styles.header}>
                <h3 className={styles.title}>Catalog</h3>
                <div className={styles.headerContent}>
                    <button
                        className={styles.filters}
                        onClick={toggleFilters}
                        aria-label="toggle filters"
                    >
                        <svg className={styles.iconFilters}>
                            <use href={`${sprite}#icon-filters`}></use>
                        </svg>
                    </button>
                    <p>
                        Showing {(page - 1) * limit + 1} –{' '}
                        {Math.min(page * limit, data.total)} of{' '}
                        {data?.total || 0} products
                    </p>
                    <div className={styles.sort}>
                        <p>Sort By:</p>
                        <Accordion title={sortTitle} absolute={true}>
                            <div className={styles.sortItems}>
                                <button
                                    onClick={(e) => handleSort(e, 'popular')}
                                >
                                    Most popular
                                </button>
                                <button
                                    onClick={(e) => handleSort(e, 'price_asc')}
                                >
                                    Price up
                                </button>
                                <button
                                    onClick={(e) => handleSort(e, 'price_desc')}
                                >
                                    Price down
                                </button>
                                <button
                                    onClick={(e) => handleSort(e, 'discount')}
                                >
                                    Discount
                                </button>
                                <button
                                    onClick={(e) => handleSort(e, 'rating')}
                                >
                                    Rating
                                </button>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className={styles.main} style={{ gap: isFilters ? 25 : 0 }}>
                <aside>
                    <Filters
                        isOpen={isFilters}
                        handleClick={setIsFilters}
                        onSetParams={onSetParams}
                        setSingleParam={setSingleParam}
                        queryFilters={queryFilters}
                        resetFilters={resetFilters}
                    />
                </aside>
                <div className={styles.catalogContainer}>
                    {data.items.length ? (
                        <Catalog products={data.items} />
                    ) : (
                        <div className={styles.wrapper}>
                            <h6 className={styles.notFoundItems}>
                                No products found
                            </h6>
                        </div>
                    )}
                    <Pagination
                        page={page}
                        setSingleParam={setSingleParam}
                        total={data.total}
                        limit={data.limit}
                    />
                </div>
            </div>
        </section>
    )
}

export default CatalogPage
