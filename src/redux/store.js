import { configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist'
import rootReducer from './config/rootReducer.js'
import { productsApi } from '../api/products/productsAPI.js'
import { promoCodeApi } from '../api/promocode/promoCodeAPI.js'
import { homePageApi } from '../api/categories/categoriesAPI.js'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        }).concat(
            productsApi.middleware,
            promoCodeApi.middleware,
            homePageApi.middleware
        )
})

export const persistor = persistStore(store)
