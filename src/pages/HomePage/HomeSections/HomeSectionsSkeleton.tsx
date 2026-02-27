import Skeleton from '../../../UI/Skeleton/Skeleton'
import { CardSkeleton } from '../../../components/ProductCard/CardSkeleton/CardSkeleton'
import { CatalogSkeleton } from '../../../components/Catalog/CatalogSkeleton'
import styles from './HomeSections.module.scss'

export const HomeSectionsSkeleton = () => {
    return (
        <div className={`container ${styles.category}`}>
            <Skeleton height={'45px'} width={'150px'} />
            <CatalogSkeleton cls={styles.list}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </CatalogSkeleton>
            <Skeleton height={'55px'} width={'300px'} />
        </div>
    )
}
