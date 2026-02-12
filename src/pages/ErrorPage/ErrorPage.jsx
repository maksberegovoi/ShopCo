import MyButton from '../../UI/MyButton/MyButton.jsx'
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <section className={`container ${styles.container}`}>
            <p className={styles.title}>Something went wrong</p>
            <MyButton onClick={reloadPage}>Reload page</MyButton>
        </section>
    )
}
