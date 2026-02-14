import styles from './MyInput.module.scss'

export const MyInput = ({
    classname,
    disabled = false,
    disabledMessage,
    ...props
}) => {
    return (
        <input
            disabled={disabled}
            title={disabled ? disabledMessage : ''}
            className={`${styles.input} ${classname}`}
            {...props}
        />
    )
}
