import { Navigate } from 'react-router-dom'
import { HOME_ROUTE } from '../../utils/consts'

export const OnlyGuest = ({ children, isAuth }) => {
    if (isAuth) {
        return <Navigate to={HOME_ROUTE} replace />
    }

    return children
}
