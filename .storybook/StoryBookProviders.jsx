import { useRef } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../src/redux/config/rootReducer.js'
import { productsApi } from '../src/api/products/productsAPI.js'
import categoriesApi from '../src/api/categories/categoriesAPI.js'
import { persistedCartReducer } from '../src/redux/config/persistConfig.js'
import { promoCodeApi } from '../src/api/promocode/promoCodeAPI.js'
import cartReducer from '../src/redux/features/cart/slice/cartSlice.js'

export const createStore = (preloadedState) =>
    configureStore({
        reducer: {
            cart: cartReducer,
            [productsApi.reducerPath]: productsApi.reducer,
            [categoriesApi.reducerPath]: categoriesApi.reducer,
            [promoCodeApi.reducerPath]: promoCodeApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productsApi.middleware, categoriesApi.middleware),
        preloadedState
    })

export const StorybookProviders = ({ children, initialState, initialEntries = ['/'] }) => {
    const storeRef = useRef(null)

    if (!storeRef.current) {
        storeRef.current = createStore(initialState)
    }

    return (
        <Provider store={storeRef.current}>
            <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
        </Provider>
    )
}
