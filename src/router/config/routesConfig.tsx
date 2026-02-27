export enum AppRoutes {
    AUTH_ROUTE = '/auth/:mode',
    LOGIN_ROUTE = '/auth/login',
    SIGNUP_ROUTE = '/auth/signup',
    HOME_ROUTE = '/',
    CATALOG_ROUTE = 'catalog',
    DETAILS_ROUTE = '/catalog/:id/:slug',
    CART_ROUTE = 'cart',
    REVIEWS_ROUTE = 'reviews',
    FAQ_ROUTE = 'faq',
    PROFILE_ROUTE = 'profile',

    //Last
    NOT_FOUND = 'not_found'
}
