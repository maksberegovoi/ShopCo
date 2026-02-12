import React from 'react'
import styles from './MyButton.module.scss'

const MyButton = ({
    as: Component = 'button',
    children,
    classname = '',
    ...props
}) => {
    return (
        <Component className={`${styles.MyButton} ${classname}`} {...props}>
            {children}
        </Component>
    )
}

export default MyButton
