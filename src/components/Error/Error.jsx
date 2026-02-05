import React from 'react'
import styles from './Error.module.scss'
import { isDev } from '../../utils/consts.js'

const Error = ({ error }) => {
    const message = isDev
        ? JSON.stringify(error, null, 2)
        : 'Something went wrong, please try again later...'

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Error</h2>
            <p className={styles.message}>{message}</p>
        </div>
    )
}

export default Error
