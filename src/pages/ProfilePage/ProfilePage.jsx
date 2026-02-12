import { useSelector } from 'react-redux'
import { userData } from '../../redux/features/user/selectors/selectors.js'
import Catalog from '../../components/Catalog/Catalog.jsx'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../../api/user/userAPI.js'
import { LOGIN_ROUTE } from '../../utils/consts.js'

const orders = [1, 2, 3]

const ProfilePage = () => {
    const user = useSelector(userData)
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout().unwrap()
        navigate(LOGIN_ROUTE, { replace: true })
    }
    return (
        <div className="container">
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <div>
                <h3>Your orders</h3>
                <ul>
                    {orders.map((order) => (
                        <li key={order}>Order</li>
                    ))}
                </ul>
            </div>
            <MyButton onClick={handleLogout}>Logout</MyButton>
        </div>
    )
}

export default ProfilePage
