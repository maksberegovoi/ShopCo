import React, { useEffect, useRef, useState } from 'react'
import styles from './Search.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import Catalog from '../Catalog/Catalog.jsx'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { useNavigate } from 'react-router-dom'
import Loader from '../../UI/Loader/Loader.jsx'

const Search = () => {
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(true)
    const [debouncedSearch, setDebouncedSearch] = useState('') // TODO: debouncedSearch
    const searchRef = useRef(null)
    const navigate = useNavigate()

    const data = {}
    const isLoading = false

    const handleSearch = () => {
        if (search.trim().length < 2) return
        navigate(`/catalog?search=${encodeURIComponent(search)}`)
        setIsOpen(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 300)

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
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    /* TODO: remove debouncedSearch and check if it's needed */
    return (
        <div className={styles.container} ref={searchRef}>
            <p>{debouncedSearch}</p>
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
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <Catalog products={data?.items || []} style={styles.catalog} />
                            <MyButton
                                handleClick={() => setIsOpen(!isOpen)}
                                classname={styles.searchBtn}
                            >
                                Close search
                            </MyButton>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default Search
