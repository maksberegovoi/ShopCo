import { combineReducers } from '@reduxjs/toolkit'
import { productsApi } from '../../api/products/productsAPI.js'
import { persistedCartReducer } from './persistConfig.js'
import { promoCodeApi } from '../../api/promocode/promoCodeAPI.js'
import { homePageApi } from '../../api/categories/categoriesAPI.js'
import { cartApi } from '../../api/cart/cartAPI.js'
import { userApi } from '../../api/user/userAPI.js'
import userReducer from '../features/user/slice/userSlice.js'

const rootReducer = combineReducers({
    cart: persistedCartReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
    [promoCodeApi.reducerPath]: promoCodeApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [userApi.reducerPath]: userApi.reducer
})

export default rootReducer
