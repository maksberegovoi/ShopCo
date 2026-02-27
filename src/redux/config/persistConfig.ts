import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from '../features/cart/slice/cartSlice'

export const persistedCartReducer = persistReducer(
    {
        key: 'cart_v2',
        version: 2,
        storage,
        whitelist: ['items']
    },
    cartReducer
)
