import { useRef } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../src/redux/config/rootReducer'
import { productsApi } from '../src/api/products/productsAPI'
import categoriesApi from '../src/api/categories/categoriesAPI'
import { persistedCartReducer } from '../src/redux/config/persistConfig'
import { promoCodeApi } from '../src/api/promocode/promoCodeAPI'
import cartReducer from '../src/redux/features/cart/slice/cartSlice'

export const createStore = (preloadedState) =>
    configureStore({
        reducer: {
            cart: cartReducer,
            [productsApi.reducerPath]: productsApi.reducer,
            [categoriesApi.reducerPath]: categoriesApi.reducer,
            [promoCodeApi.reducerPath]: promoCodeApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                productsApi.middleware,
                categoriesApi.middleware
            ),
        preloadedState
    })

export const StorybookProviders = ({
    children,
    initialState,
    initialEntries = ['/']
}) => {
    const storeRef = useRef(null)

    if (!storeRef.current) {
        storeRef.current = createStore(initialState)
    }

    return (
        <Provider store={storeRef.current}>
            <MemoryRouter initialEntries={initialEntries}>
                {children}
            </MemoryRouter>
        </Provider>
    )
}
