import styles from '../../components/Catalog/Catalog.module.scss'

export const CatalogSkeleton = ({ cls, children }) => {
    return <div className={`${styles.catalog} ${cls}`}>{children}</div>
}
