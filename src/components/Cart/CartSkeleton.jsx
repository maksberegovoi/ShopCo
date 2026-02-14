import React from 'react'
import styles from './Cart.module.scss'
import Skeleton from '../../UI/Skeleton/Skeleton.jsx'

export const CartSkeleton = () => {
    return (
        <div className={styles.container}>
            <Skeleton width="160px" height="32px" radius="6px" />

            <div className={styles.content}>
                {/* Cart items */}
                <ul className={styles.list}>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i} className={styles.item}>
                            <Skeleton
                                width="20px"
                                height="20px"
                                radius="50%"
                                className={styles.removeBtn}
                            />

                            <div className={styles.imageWrapper}>
                                <Skeleton
                                    width="100%"
                                    height="120px"
                                    radius="20px"
                                />
                            </div>

                            <div className={styles.info}>
                                <div className={styles.details}>
                                    <Skeleton
                                        width="60%"
                                        height="20px"
                                        radius="6px"
                                        className={styles.name}
                                    />
                                    <Skeleton
                                        width="40%"
                                        height="16px"
                                        radius="6px"
                                    />
                                    <Skeleton
                                        width="40%"
                                        height="16px"
                                        radius="6px"
                                    />
                                </div>

                                <div className={styles.footer}>
                                    <div className={styles.priceContainer}>
                                        <Skeleton
                                            width="50px"
                                            height="20px"
                                            radius="6px"
                                        />
                                        <Skeleton
                                            width="60px"
                                            height="22px"
                                            radius="6px"
                                        />
                                    </div>

                                    <div className={styles.quantity}>
                                        <Skeleton
                                            width="20px"
                                            height="20px"
                                            radius="50%"
                                        />
                                        <Skeleton
                                            width="20px"
                                            height="20px"
                                            radius="6px"
                                        />
                                        <Skeleton
                                            width="20px"
                                            height="20px"
                                            radius="50%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Summary */}
                <div className={styles.summary}>
                    <Skeleton width="140px" height="24px" radius="6px" />

                    <div className={styles.summaryList}>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className={styles.summaryItem}>
                                <Skeleton
                                    width="80px"
                                    height="16px"
                                    radius="6px"
                                />
                                <Skeleton
                                    width="60px"
                                    height="16px"
                                    radius="6px"
                                />
                            </div>
                        ))}
                    </div>

                    <div className={styles.summaryItem}>
                        <Skeleton width="60px" height="18px" radius="6px" />
                        <Skeleton width="90px" height="20px" radius="6px" />
                    </div>

                    <div className={styles.promo}>
                        <Skeleton width="100%" height="44px" radius="20px" />
                    </div>

                    <Skeleton width="100%" height="48px" radius="8px" />
                </div>
            </div>
        </div>
    )
}
