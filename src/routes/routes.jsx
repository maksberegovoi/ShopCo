import {
    CART_ROUTE,
    CATALOG_ROUTE,
    DETAILS_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    REVIEWS_ROUTE,
    PROFILE_ROUTE,
    AUTH_ROUTE
} from '../utils/consts.js'
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import CartPage from '../pages/CartPage/CartPage.jsx'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx'
import DetailsPage from '../pages/DetailsPage/DetailsPage.jsx'
import ProductAttributes from '../components/ProductAttributes/ProductAttributes.jsx'
import Reviews from '../components/Reviews/Reviews.jsx'
import Faq from '../components/Faq/Faq.jsx'
import AuthPage from '../pages/AuthPage/AuthPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'

export const routes = [
    {
        path: AUTH_ROUTE,
        element: <AuthPage />
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
