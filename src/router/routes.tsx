import {
    CART_ROUTE,
    CATALOG_ROUTE,
    DETAILS_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    REVIEWS_ROUTE,
    PROFILE_ROUTE,
    AUTH_ROUTE
} from '../utils/consts'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import HomePage from '../pages/HomePage/HomePage'
import CartPage from '../pages/CartPage/CartPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import ProductAttributes from '../components/ProductAttributes/ProductAttributes'
import Reviews from '../components/Reviews/Reviews'
import Faq from '../components/Faq/Faq'
import AuthPage from '../pages/AuthPage/AuthPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'

export const routes = [
    {
        path: AUTH_ROUTE,
        element: <AuthPage />,
        guestOnly: true
    },
    {
        path: PROFILE_ROUTE,
        element: <ProfilePage />,
        authOnly: true
    },
    { path: HOME_ROUTE, element: <HomePage /> },
    { path: CATALOG_ROUTE, element: <CatalogPage /> },
    { path: CART_ROUTE, element: <CartPage /> },
    {
        path: DETAILS_ROUTE,
        element: <DetailsPage />,
        children: [
            { index: true, element: <ProductAttributes /> },
            { path: REVIEWS_ROUTE, element: <Reviews /> },
            { path: FAQ_ROUTE, element: <Faq /> }
        ]
    },

    { path: '*', element: <NotFoundPage /> }
]
