import { combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "../../api/products/productsAPI.js";
import { persistedCartReducer } from "./persistConfig.js";
import { promoCodeApi } from "../../api/promocode/promoCodeAPI.js";
import categoriesApi from "../../api/categories/categoriesAPI.js";

const rootReducer = combineReducers({
  cart: persistedCartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [promoCodeApi.reducerPath]: promoCodeApi.reducer,
});

export default rootReducer;
