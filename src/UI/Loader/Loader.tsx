import React from 'react'
import styles from './Loader.module.scss'

interface LoaderProps {
    classname?: string
}

const Loader = ({ classname }: LoaderProps) => {
    return (
        <div className={`${styles.loader} ${classname}`}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Loader
