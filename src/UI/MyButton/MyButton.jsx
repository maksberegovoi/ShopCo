import React from 'react'
import styles from './MyButton.module.scss'

const MyButton = ({
    as: Component = 'button',
    children,
    classname = '',
    disabled = false,
    disabledMessage = '',
    ...props
}) => {
    return (
        <Component
            disabled={disabled}
            title={disabled ? disabledMessage : ''}
            className={`${styles.MyButton} ${classname}`}
            {...props}
        >
            {children}
        </Component>
    )
}

export default MyButton
