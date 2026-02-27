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
import rootReducer from './config/rootReducer'
import { api } from '../api/api'

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
        }).concat(api.middleware)
})

export const persistor = persistStore(store)
