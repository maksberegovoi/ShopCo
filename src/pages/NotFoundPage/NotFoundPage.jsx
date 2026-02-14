import React from 'react'
import styles from './NotFoundPage.module.scss'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { HOME_ROUTE } from '../../utils/consts.js'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <section className={`container ${styles.wrapper}`}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>Page has not found</p>
            <MyButton as={Link} to={HOME_ROUTE} classame={styles.btn}>
                Homepage
            </MyButton>
        </section>
    )
}

export default NotFoundPage
