import { combineReducers } from '@reduxjs/toolkit'
import { persistedCartReducer } from './persistConfig.js'
import userReducer from '../features/user/slice/userSlice.js'
import { api } from '../../api/api.jsx'

const rootReducer = combineReducers({
    cart: persistedCartReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer
})

export default rootReducer
