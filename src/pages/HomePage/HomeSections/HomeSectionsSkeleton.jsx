import Skeleton from '../../../UI/Skeleton/Skeleton.jsx'
import { CardSkeleton } from '../../../UI/Skeleton/CardSkeleton/CardSkeleton.jsx'
import { CatalogSkeleton } from '../../../UI/Skeleton/CatalogSkeleton.jsx'
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
