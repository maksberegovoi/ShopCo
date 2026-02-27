import Skeleton from '../../UI/Skeleton/Skeleton'
import styles from './Reviews.module.scss'

export const ReviewsSkeleton = () => {
    return (
        <div className={styles.list}>
            <Skeleton height={'170px'} radius={'1rem'} />
            <Skeleton height={'170px'} radius={'1rem'} />
            <Skeleton height={'170px'} radius={'1rem'} />
            <Skeleton height={'170px'} radius={'1rem'} />
        </div>
    )
}
