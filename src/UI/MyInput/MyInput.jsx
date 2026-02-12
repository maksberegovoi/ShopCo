import styles from './MyInput.module.scss'

export const MyInput = ({ classname, ...props }) => {
    return <input className={`${styles.input} ${classname}`} {...props} />
}
