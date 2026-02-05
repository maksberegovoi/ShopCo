import Skeleton from '../../UI/Skeleton/Skeleton.jsx'
import styles from './ProductDetails.module.scss'

export const ProductDetailsSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gallery}>
                <Skeleton width="150px" height="550px" radius="1rem" />
                <Skeleton width="600px" height="550px" radius="8px" />
            </div>

            <div className={styles.content}>
                <Skeleton width="60%" height="28px" />
                <Skeleton width="40%" height="20px" />
                <Skeleton width="30%" height="24px" />
                <Skeleton width="100%" height="80px" />
                <Skeleton width="160px" height="48px" radius="24px" />
            </div>
        </div>
    )
}
