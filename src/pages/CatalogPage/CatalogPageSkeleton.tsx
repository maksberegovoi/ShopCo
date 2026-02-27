import { CardSkeleton } from '../../components/ProductCard/CardSkeleton/CardSkeleton'
import styles from '../../components/Catalog/Catalog.module.scss'
import catalogPageStyles from './CatalogPage.module.scss'
import FiltersSkeleton from '../../components/Filters/FiltersSkeleton'

export const CatalogPageSkeleton = () => {
    return (
        <div className="container">
            <div className={catalogPageStyles.main}>
                <FiltersSkeleton />
                <div className={styles.catalog}>
                    {Array.from({ length: 9 }).map(() => (
                        <CardSkeleton />
                    ))}
                </div>
            </div>
        </div>
    )
}
