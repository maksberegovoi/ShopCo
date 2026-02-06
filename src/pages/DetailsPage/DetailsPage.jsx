import React, { Suspense } from 'react'
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx'
import { generatePath, NavLink, Outlet } from 'react-router-dom'
import styles from './DetailsPage.module.scss'
import { FAQ_ROUTE, REVIEWS_ROUTE } from '../../utils/consts.js'

const DetailsPage = () => {
    return (
        <>
            <section className={'container'}>
                <ProductDetails />
                <div className={styles.togglerContainer}>
                    <NavLink
                        to=""
                        end
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.link} ${styles.active}`
                                : styles.link
                        }
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to={generatePath(REVIEWS_ROUTE)}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.link} ${styles.active}`
                                : styles.link
                        }
                    >
                        Rating & Reviews
                    </NavLink>
                    <NavLink
                        to={generatePath(FAQ_ROUTE)}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.link} ${styles.active}`
                                : styles.link
                        }
                    >
                        FAQs
                    </NavLink>
                </div>
            </section>
            <section className={`${styles.outlet} container`}>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </section>
        </>
    )
}

export default DetailsPage
