import React from 'react'
import styles from './Pagination.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import MyButton from '../MyButton/MyButton.jsx'

const Pagination = ({ page, total, limit, setSingleParam }) => {
    const totalPages = Math.ceil(total / limit)
    if (totalPages <= 1) return null

    const handlePrev = () => setSingleParam('page', Math.max(page - 1, 1))
    const handleNext = () =>
        setSingleParam('page', Math.min(page + 1, totalPages))

    const getPageNumbers = () => {
        const siblingCount = 2
        const totalPages = Math.ceil(total / limit)

        const totalNumbers = siblingCount * 2 + 5
        if (totalPages <= totalNumbers) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

        const leftSiblingIndex = Math.max(page - siblingCount, 1)
        const rightSiblingIndex = Math.min(page + siblingCount, totalPages)

        const showLeftDots = leftSiblingIndex > 2
        const showRightDots = rightSiblingIndex < totalPages - 1

        const pages = []

        pages.push(1)

        if (showLeftDots) {
            pages.push('...')
        }

        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
            if (i !== 1 && i !== totalPages) {
                pages.push(i)
            }
        }

        if (showRightDots) {
            pages.push('...')
        }

        if (totalPages > 1) {
            pages.push(totalPages)
        }

        return pages
    }

    const pages = getPageNumbers()

    return (
        <div className={styles.pagination}>
            <MyButton
                className={styles.navBtn}
                onClick={handlePrev}
                disabled={page === 1}
            >
                <svg className={`${styles.arrow} ${styles.arrowLeft}`}>
                    <use href={`${sprite}#icon-arrowRight`}></use>
                </svg>
                <span className={styles.btnText}>Previous</span>
            </MyButton>
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
                        <MyButton
                            key={p}
                            onClick={() => setSingleParam('page', p)}
                            className={
                                p === page
                                    ? `${styles.page} ${styles.active}`
                                    : styles.page
                            }
                        >
                            {p}
                        </MyButton>
                    )
                })}
            </div>
            <MyButton
                className={styles.navBtn}
                onClick={handleNext}
                disabled={page === totalPages}
            >
                <span className={styles.btnText}>Next</span>
                <svg className={`${styles.arrow} ${styles.arrowRight}`}>
                    <use href={`${sprite}#icon-arrowRight`}></use>
                </svg>
            </MyButton>
        </div>
    )
}

export default Pagination
