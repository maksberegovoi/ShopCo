import React from 'react'
import styles from './Filters.module.scss'
import Skeleton from '../../UI/Skeleton/Skeleton.jsx'

const FiltersSkeleton = () => {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.title}>
                <Skeleton width="100px" height="28px" radius="6px" />
                <Skeleton width="24px" height="24px" radius="50%" />
            </div>

            <ul className={styles.filters}>
                {/* Price */}
                <li className={styles.column}>
                    <Skeleton
                        width="120px"
                        height="22px"
                        radius="6px"
                        className={styles.filterTitle}
                    />
                    <div className={styles.filterWrapper}>
                        <Skeleton width="100%" height="40px" radius="8px" />
                        <Skeleton width="100%" height="40px" radius="8px" />
                    </div>
                </li>

                {/* Color */}
                <li className={styles.column}>
                    <Skeleton
                        width="100px"
                        height="22px"
                        radius="6px"
                        className={styles.filterTitle}
                    />
                    <div className={styles.filterItems}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                width="32px"
                                height="32px"
                                radius="50%"
                            />
                        ))}
                    </div>
                </li>

                {/* Primitive filters */}
                {Array.from({ length: 3 }).map((_, i) => (
                    <li key={i} className={styles.column}>
                        <Skeleton
                            width="140px"
                            height="22px"
                            radius="6px"
                            className={styles.filterTitle}
                        />
                        <ul className={styles.filterItems}>
                            {Array.from({ length: 5 }).map((_, j) => (
                                <Skeleton
                                    key={j}
                                    width="90px"
                                    height="32px"
                                    radius="8px"
                                />
                            ))}
                        </ul>
                    </li>
                ))}

                <Skeleton width="100%" height="40px" radius="8px" />
            </ul>

            <Skeleton
                width="100%"
                height="44px"
                radius="8px"
                marginTop={'10px'}
            />
        </div>
    )
}

export default FiltersSkeleton
