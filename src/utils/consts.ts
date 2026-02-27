import sprite from '../../assets/icons/sprite.svg'

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

export const columns = [
    {
        title: 'Company',
        links: [
            { name: 'About', path: '*' },
            { name: 'Features', path: '*' },
            { name: 'Works', path: '*' },
            { name: 'Career', path: '*' }
        ]
    },
    {
        title: 'Help',
        links: [
            { name: 'Customer Support', path: '*' },
            { name: 'Delivery Details', path: '*' },
            { name: 'Terms & Conditions', path: '*' },
            { name: 'Privacy Policy', path: '*' }
        ]
    },
    {
        title: 'Faq',
        links: [
            { name: 'Account', path: '*' },
            { name: 'Manage Delivers', path: '*' },
            { name: 'Orders', path: '*' },
            { name: 'Payments', path: '*' }
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'Free eBooks', path: '*' },
            { name: 'Development Tutorial', path: '*' },
            { name: 'How to - Blog', path: '*' },
            { name: 'Youtube Playlist', path: '*' }
        ]
    }
]

export const socials = [
    { name: 'Twitter', icon: `${sprite}#icon-twitter`, href: '/' },
    { name: 'Facebook', icon: `${sprite}#icon-facebook`, href: '/' },
    { name: 'Instagram', icon: `${sprite}#icon-instagram`, href: '/' },
    { name: 'Github', icon: `${sprite}#icon-github`, href: '/' }
]

export const badges = [
    { name: 'Visa', icon: `${sprite}#icon-visa` },
    { name: 'MasterCard', icon: `${sprite}#icon-mastercard` },
    { name: 'PayPal', icon: `${sprite}#icon-paypal` },
    { name: 'GooglePay', icon: `${sprite}#icon-google-pay` },
    { name: 'ApplePay', icon: `${sprite}#icon-apple-pay` }
]
