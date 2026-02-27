import { combineReducers } from '@reduxjs/toolkit'
import { persistedCartReducer } from './persistConfig'
import userReducer from '../features/user/slice/userSlice'
import { api } from '../../api/api'

const rootReducer = combineReducers({
    cart: persistedCartReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer
})

export default rootReducer
