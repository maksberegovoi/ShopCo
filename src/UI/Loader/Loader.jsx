import React from 'react'
import styles from './Loader.module.scss'

const Loader = ({ classname = '' }) => {
    return (
        <div className={`${styles.loader} ${classname}`}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Loader
