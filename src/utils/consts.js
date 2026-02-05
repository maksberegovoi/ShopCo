export const HOME_ROUTE = '/'
export const CATALOG_ROUTE = '/catalog'
export const DETAILS_ROUTE = '/catalog/:id/:slug'
export const CART_ROUTE = '/cart'
export const REVIEWS_ROUTE = 'reviews'
export const FAQ_ROUTE = 'faq'

export const colorMap = [
    { name: 'black', hex: '#0A0A0A' },
    { name: 'red', hex: '#DC2626' },
    { name: 'blue', hex: '#2563EB' },
    { name: 'green', hex: '#314F4A' },
    { name: 'gray', hex: '#6B7280' },
    { name: 'white', hex: '#FEFEFE' },
    { name: 'brown', hex: '#4F4631' },
    { name: 'pink', hex: '#EC4899' },
    { name: 'purple', hex: '#31344F' },
    { name: 'yellow', hex: '#EAB308' },
    { name: 'beige', hex: '#F5F5DC' },
    { name: 'orange', hex: '#EA580C' },
    { name: 'burgundy', hex: '#800020' },
    { name: 'navy', hex: '#000080' },
    { name: 'dark-blue', hex: '#00008B' },
    { name: 'light-blue', hex: '#ADD8E6' }
]

export const sizeMap = [
    'XX-Small',
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
    '4X-Large'
]

export const stylesMap = ['Casual', 'Formal', 'Party', 'Gym']
export const maxProductPrice = 1000
export const typesMap = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']
export const brandsMap = ['zara', 'gucci', 'versace', 'calvinKlein', 'prada']

export const isDev = import.meta.env.VITE_NODE_ENV === 'dev'
