import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import rootReducer from "./rootReducer.js";
import { productsApi } from "./features/products/productsAPI.js";
import {promoCodeApi} from "./features/promocode/promoCodeAPI.jsx";
import categoriesApi from "./features/categories/categoriesAPI.js";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware,promoCodeApi.middleware,categoriesApi.middleware),
});

export const persistor = persistStore(store);
