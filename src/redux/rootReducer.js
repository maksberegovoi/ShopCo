import { combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/products/productsAPI.js";
import { persistedCartReducer } from "./persistConfig.js";
import {promoCodeApi} from "./features/promocode/promoCodeAPI.jsx";

const rootReducer = combineReducers({
  cart: persistedCartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [promoCodeApi.reducerPath]: promoCodeApi.reducer,
});

export default rootReducer;
