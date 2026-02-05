import Skeleton from '../../UI/Skeleton/Skeleton.jsx'
import styles from './ProductAttributes.module.scss'

export const ProductAttributesSkeleton = () => {
    return (
        <div className={styles.container}>
            <Skeleton radius={'1rem'} height={'235px'} />
            <Skeleton radius={'1rem'} height={'235px'} />
            <Skeleton radius={'1rem'} height={'235px'} />
            <Skeleton radius={'1rem'} height={'235px'} />
        </div>
    )
}
