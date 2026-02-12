import { useTheme } from '../../hooks/useTheme/useTheme.jsx'
import styles from './ThemeSwitcher.module.scss'
import sprite from '../../../assets/icons/sprite.svg'

export const ThemeSwitcher = () => {
    const { theme, toggle } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button className={styles.btn} onClick={toggle}>
            {isDark ? (
                <svg className={styles.icon}>
                    <use href={`${sprite}#icon-moon`}></use>
                </svg>
            ) : (
                <svg className={styles.icon}>
                    <use href={`${sprite}#icon-sun`}></use>
                </svg>
            )}
        </button>
    )
}
