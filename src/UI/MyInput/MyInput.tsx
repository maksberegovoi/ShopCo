import type { InputHTMLAttributes } from 'react'
import styles from './MyInput.module.scss'

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    classname?: string
    disabledMessage?: string
}
export const MyInput = ({
    classname,
    disabled = false,
    disabledMessage,
    ...props
}: MyInputProps) => {
    return (
        <input
            disabled={disabled}
            title={disabled ? disabledMessage : ''}
            className={`${styles.input} ${classname}`}
            {...props}
        />
    )
}
