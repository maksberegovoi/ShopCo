export const AUTH_ROUTE = '/auth/:mode'
export const LOGIN_ROUTE = '/auth/login'
export const SIGNUP_ROUTE = '/auth/signup'
export const HOME_ROUTE = '/'
export const CATALOG_ROUTE = '/catalog'
export const DETAILS_ROUTE = '/catalog/:id/:slug'
export const CART_ROUTE = '/cart'
export const REVIEWS_ROUTE = 'reviews'
export const FAQ_ROUTE = 'faq'
export const PROFILE_ROUTE = '/profile'

export const isDev = import.meta.env.VITE_NODE_ENV === 'dev'

export const toastOptions = {
    style: {
        background: '#363636',
        color: '#fff',
        fontSize: '18px',
        padding: '20px',
        minWidth: '300px',
        borderRadius: '12px'
    },
    success: {
        duration: 1000,
        style: {
            background: '#054D39FF',
            color: '#fff',
            fontSize: '18px',
            padding: '20px'
        },
        iconTheme: {
            primary: '#054D39FF',
            secondary: 'white'
        }
    },
    error: {
        duration: 2500,
        style: {
            background: '#FF0000',
            color: '#fff',
            fontSize: '18px',
            padding: '20px',
            minWidth: '350px'
        },
        iconTheme: {
            primary: 'red',
            secondary: 'white'
        }
    }
}
