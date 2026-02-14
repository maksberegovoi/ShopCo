import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from '../features/cart/slice/cartSlice.js'

export const persistedCartReducer = persistReducer(
    {
        key: 'cart',
        version: 2,
        storage,
        whitelist: ['items']
    },
    cartReducer
)
