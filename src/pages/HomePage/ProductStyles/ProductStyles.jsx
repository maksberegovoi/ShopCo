import React from 'react'
import styles from './ProductStyles.module.scss'
import casualImg from '/images/productStyles/casual.png'
import gymImg from '/images/productStyles/gym.png'
import partyImg from '/images/productStyles/party.png'
import formalImg from '/images/productStyles/formal.png'
import { NavLink } from 'react-router-dom'
import { CATALOG_ROUTE } from '../../../utils/consts.js'

const ProductStyles = () => {
    return (
        <section className={`container`}>
            <div className={styles.typesWrapper}>
                <h2>BROWSE BY DRESS STYLE</h2>
                <div className={styles.typesContainer}>
                    <div className={`${styles.rowFirst} ${styles.row}`}>
                        <NavLink to={`${CATALOG_ROUTE}?style=Casual`}>
                            <div
                                className={styles.typeContainer}
                                style={{ backgroundImage: `url(${casualImg})` }}
                            >
                                <h3 className={styles.typeTitle}>Casual</h3>
                            </div>
                        </NavLink>
                        <NavLink to={`${CATALOG_ROUTE}?style=Formal`}>
                            <div
                                className={styles.typeContainer}
                                style={{ backgroundImage: `url(${formalImg})` }}
                            >
                                <h3 className={styles.typeTitle}>Formal</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div className={`${styles.rowSecond} ${styles.row}`}>
                        <NavLink to={`${CATALOG_ROUTE}?style=Party`}>
                            <div
                                className={styles.typeContainer}
                                style={{ backgroundImage: `url(${partyImg})` }}
                            >
                                <h3 className={styles.typeTitle}>Party</h3>
                            </div>
                        </NavLink>
                        <NavLink to={`${CATALOG_ROUTE}?style=Gym`}>
                            <div
                                className={styles.typeContainer}
                                style={{ backgroundImage: `url(${gymImg})` }}
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
