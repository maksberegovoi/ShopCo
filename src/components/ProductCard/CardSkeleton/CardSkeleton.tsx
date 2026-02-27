import styles from './CardSkeleton.module.scss'
import Skeleton from '../../../UI/Skeleton/Skeleton'

export const CardSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <Skeleton className={styles.imageSkeleton} />
                </div>

                <div className={styles.cardContent}>
                    <Skeleton width="70%" height="1em" />
                    <Skeleton width="40%" height="1em" />
                    <Skeleton width="50%" height="1.2em" />
                </div>
            </div>
        </div>
    )
}
