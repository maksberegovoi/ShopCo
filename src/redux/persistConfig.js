import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cart/cartSlice.js";

export const persistedCartReducer = persistReducer(
  {
    key: "cart",
    storage,
    whitelist: ["items"],
  },
  cartReducer,
);
