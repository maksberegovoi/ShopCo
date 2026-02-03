import React from 'react'
import styles from './Pagination.module.scss'
import sprite from '../../../assets/icons/sprite.svg'

const Pagination = ({ page, total, limit, onPageChange }) => {
    const totalPages = Math.ceil(total / limit)
    if (totalPages <= 1) return null

    const handlePrev = () => onPageChange(Math.max(page - 1, 1))
    const handleNext = () => onPageChange(Math.min(page + 1, totalPages))

    const getPageNumbers = () => {
        const delta = 1
        const range = []
        const rangeWithDots = []
        range.push(1)

        for (let i = page - delta; i <= page + delta; i++) {
            if (i > 1 && i < totalPages) {
                range.push(i)
            }
        }

        if (totalPages > 1) {
            range.push(totalPages)
        }

        let prev = 0
        for (const i of range) {
            if (i - prev === 2) {
                rangeWithDots.push(prev + 1)
            } else if (i - prev > 2) {
                rangeWithDots.push('...')
            }
            rangeWithDots.push(i)
            prev = i
        }

        return rangeWithDots
    }

    const pages = getPageNumbers()

    return (
        <div className={styles.pagination}>
            <button className={styles.navBtn} onClick={handlePrev} disabled={page === 1}>
                <svg className={`${styles.arrow} ${styles.arrowLeft}`}>
                    <use href={`${sprite}#icon-arrowRight`}></use>
                </svg>
                <span className={styles.btnText}>Previous</span>
            </button>
            <div className={styles.pages}>
                {pages.map((p, index) => {
                    if (p === '...') {
                        return (
                            <span key={`dots-${index}`} className={styles.dots}>
                                ...
                            </span>
                        )
                    }
                    return (
                        <button
                            key={p}
                            onClick={() => onPageChange(p)}
                            className={p === page ? `${styles.page} ${styles.active}` : styles.page}
                        >
                            {p}
                        </button>
                    )
                })}
            </div>
            <button className={styles.navBtn} onClick={handleNext} disabled={page === totalPages}>
                <span className={styles.btnText}>Next</span>
                <svg className={`${styles.arrow} ${styles.arrowRight}`}>
                    <use href={`${sprite}#icon-arrowRight`}></use>
                </svg>
            </button>
        </div>
    )
}

export default Pagination
