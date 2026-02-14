import MyButton from '../../UI/MyButton/MyButton.jsx'
import styles from './ErrorPage.module.scss'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
    const navigate = useNavigate()
    const reloadPage = () => {
        window.location.reload()
    }
    const toPreviousPage = () => {
        navigate(-1)
        setTimeout(() => {
            window.location.reload()
        }, 100)
    }

    return (
        <section className={`container ${styles.container}`}>
            <p className={styles.title}>Something went wrong</p>
            <MyButton onClick={reloadPage}>Reload page</MyButton>
            <MyButton onClick={toPreviousPage}>Back</MyButton>
        </section>
    )
}
