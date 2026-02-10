import { combineReducers } from '@reduxjs/toolkit'
import { productsApi } from '../../api/products/productsAPI.js'
import { persistedCartReducer } from './persistConfig.js'
import { promoCodeApi } from '../../api/promocode/promoCodeAPI.js'
import { homePageApi } from '../../api/categories/categoriesAPI.js'
import { cartApi } from '../../api/cart/cartAPI.js'

const rootReducer = combineReducers({
    cart: persistedCartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
    [promoCodeApi.reducerPath]: promoCodeApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer
})

export default rootReducer
