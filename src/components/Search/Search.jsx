import React, { useEffect, useRef, useState } from 'react'
import styles from './Search.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import Catalog from '../Catalog/Catalog.jsx'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { useNavigate } from 'react-router-dom'
import Loader from '../../UI/Loader/Loader.jsx'
import { useGetProductsQuery } from '../../api/products/productsAPI.js'
import Error from '../Error/Error.jsx'

const Search = () => {
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(true)
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const searchRef = useRef(null)
    const navigate = useNavigate()

    const { data, isLoading, isError, error } = useGetProductsQuery(
        { search: debouncedSearch },
        { skip: debouncedSearch.length < 3 }
    )

    const handleSearch = () => {
        if (search.trim().length < 2) return
        navigate(`/catalog?search=${encodeURIComponent(search)}`)
        setIsOpen(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500)

        return () => clearTimeout(timer)
    }, [search])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        if (search.trim().length >= 2) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [search])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    if (isLoading) return <Loader />
    if (isError) return <Error error={error} />

    const items = data?.items ?? []
    console.log(items)
    return (
        <div className={styles.container} ref={searchRef}>
            <div className={styles.searchBox}>
                <button onClick={handleSearch} aria-label="search button">
                    <svg className={styles.icon}>
                        <use href={`${sprite}#icon-search`}></use>
                    </svg>
                </button>
                <input
                    className={styles.search}
                    type="text"
                    placeholder="Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
            </div>
            {isOpen && (
                <div className={styles.content}>
                    <Catalog products={items} style={styles.catalog} />
                    <MyButton
                        onClick={handleSearch}
                        classname={styles.searchBtn}
                    >
                        Search in catalog
                    </MyButton>
                </div>
            )}
        </div>
    )
}

export default Search
