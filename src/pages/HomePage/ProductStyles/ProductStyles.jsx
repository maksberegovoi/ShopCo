import React from 'react'
import styles from './ProductStyles.module.scss'
import { NavLink } from 'react-router-dom'
import { CATALOG_ROUTE } from '../../../utils/consts.js'
import { optimizeUrl } from '../../../utils/optimizeUrl/optimizeUrl.js'

const ProductStyles = () => {
    return (
        <section className={`container`}>
            <div className={styles.typesWrapper}>
                <h2>BROWSE BY DRESS STYLE</h2>
                <div className={styles.typesContainer}>
                    <div className={`${styles.rowFirst} ${styles.row}`}>
                        <NavLink to={`${CATALOG_ROUTE}?style=1`}>
                            <div
                                className={styles.typeContainer}
                                style={{
                                    backgroundImage: `url(${optimizeUrl('https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770829069/casual_uynhp3.png')})`
                                }}
                            >
                                <h3 className={styles.typeTitle}>Casual</h3>
                            </div>
                        </NavLink>
                        <NavLink to={`${CATALOG_ROUTE}?style=2`}>
                            <div
                                className={styles.typeContainer}
                                style={{
                                    backgroundImage: `url(${optimizeUrl('https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770829073/formal_vufucf.png')})`
                                }}
                            >
                                <h3 className={styles.typeTitle}>Formal</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div className={`${styles.rowSecond} ${styles.row}`}>
                        <NavLink to={`${CATALOG_ROUTE}?style=4`}>
                            <div
                                className={styles.typeContainer}
                                style={{
                                    backgroundImage: `url(${optimizeUrl('https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770829066/party_m9pkft.png')})`
                                }}
                            >
                                <h3 className={styles.typeTitle}>Party</h3>
                            </div>
                        </NavLink>
                        <NavLink to={`${CATALOG_ROUTE}?style=3`}>
                            <div
                                className={styles.typeContainer}
                                style={{
                                    backgroundImage: `url(${optimizeUrl('https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770829062/gym_d61kgk.png')})`
                                }}
                            >
                                <h3 className={styles.typeTitle}>Gym</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductStyles
