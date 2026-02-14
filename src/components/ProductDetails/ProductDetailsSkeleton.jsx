import Skeleton from '../../UI/Skeleton/Skeleton.jsx'
import styles from './ProductDetails.module.scss'

export const ProductDetailsSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gallery}>
                <div className={styles.thumbnails}>
                    <Skeleton
                        height="190px"
                        width="150px"
                        radius="1rem"
                        className={styles.thumbnail}
                    />
                    <Skeleton
                        height="190px"
                        width="150px"
                        radius="1rem"
                        className={styles.thumbnail}
                    />
                    <Skeleton
                        height="190px"
                        width="150px"
                        radius="1rem"
                        className={styles.thumbnail}
                    />
                </div>
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
