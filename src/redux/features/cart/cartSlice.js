import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      console.log(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(product => product.id !== parseInt(action.payload))
    },
    incrementQuantity: (state, action) => {
      const product = state.items.find(product => product.id === parseInt(action.payload))
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.items.find(product => product.id === parseInt(action.payload))
      if (product) {
        product.quantity -= 1;
      }
    }
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
