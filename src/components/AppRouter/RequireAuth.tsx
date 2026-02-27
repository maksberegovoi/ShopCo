import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getIsAuth } from '../../redux/features/user/selectors/selectors'
import { LOGIN_ROUTE } from '../../utils/consts'

export function RequireAuth({ children }) {
    const auth = useSelector(getIsAuth)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />
    }

    return children
}
