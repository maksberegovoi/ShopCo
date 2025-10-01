import { combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/products/productsAPI.js";
import { persistedCartReducer } from "./persistConfig.js";
import {promoCodeApi} from "./features/promocode/promoCodeAPI.jsx";
import categoriesApi from "./features/categories/categoriesAPI.js";

const rootReducer = combineReducers({
  cart: persistedCartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [promoCodeApi.reducerPath]: promoCodeApi.reducer,
});

export default rootReducer;
