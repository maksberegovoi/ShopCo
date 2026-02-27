import type { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './MyButton.module.scss'

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    classname?: string
    disabledMessage?: string
}

const MyButton = ({
    children,
    disabled = false,
    classname = '',
    disabledMessage = '',
    ...props
}: MyButtonProps) => {
    return (
        <button
            disabled={disabled}
            title={disabled ? disabledMessage : ''}
            className={`${styles.MyButton} ${classname}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default MyButton
