import type { ReactNode } from 'react'
import styles from './Catalog.module.scss'

interface CatalogSkeletonProps {
    cls?: string
    children: ReactNode
}

export const CatalogSkeleton = ({ cls, children }: CatalogSkeletonProps) => {
    return <div className={`${styles.catalog} ${cls}`}>{children}</div>
}
