import React from 'react'
import styles from './NotFoundPage.module.scss'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { HOME_ROUTE } from '../../utils/consts.js'

const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>Page has not found</p>
            <MyButton to={HOME_ROUTE} classname={styles.btn}>
                Homepage
            </MyButton>
        </div>
    )
}

export default NotFoundPage
