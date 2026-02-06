import styles from '../FilterRows.module.scss'
import sprite from '../../../../assets/icons/sprite.svg'
import { useFilters } from '../../../hooks/useFilters/useFilters.js'

const StyleFilter = ({ handler }) => {
    const { filters } = useFilters()

    const handleClick = (style) => {
        handler(style)
    }
    const stylesMap = []

    return (
        <div className={styles.container}>
            {stylesMap.map((style) => (
                <button
                    key={style}
                    type="button"
                    aria-label={`style ${style}`}
                    onClick={() => handleClick(style)}
                    className={
                        filters.style === style
                            ? `${styles.option} ${styles.active}`
                            : styles.option
                    }
                >
                    {style}
                    {filters.style === style && (
                        <svg className={styles.icon}>
                            <use href={`${sprite}#icon-check-mark`}></use>
                        </svg>
                    )}
                </button>
            ))}
        </div>
    )
}

export default StyleFilter
