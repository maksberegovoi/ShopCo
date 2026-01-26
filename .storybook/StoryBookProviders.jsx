import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/redux/features/cart/slice/cartSlice.js";

export const createStorybookStore = (preloadedState) =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },

    preloadedState,
  });

export const StorybookProviders = ({
  children,
  preloadedState,
  initialEntries = ["/"],
}) => {
  const store = createStorybookStore(preloadedState);

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </Provider>
  );
};
