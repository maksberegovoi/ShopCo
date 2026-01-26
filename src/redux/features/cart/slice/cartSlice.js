import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    deliveryFee: 15,
    promoCodeDiscount: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;

      const existingProduct = findCartItem(
        state.items,
        newProduct.id,
        newProduct.color,
        newProduct.size
      );

      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity;
      } else {
        state.items.push(newProduct);
      }
    },

    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;

      state.items = state.items.filter(product =>
        !(product.id === id &&
          product.size === size &&
          product.color === color)
      );
    },

    incrementQuantity: (state, action) => {
      const { id, size, color } = action.payload;

      const product = findCartItem(state.items, id, color, size);
      if (product) {
        product.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const { id, size, color } = action.payload;

      const product = findCartItem(state.items, id, color, size);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    setPromoCodeDiscount: (state, action) => {
      state.promoCodeDiscount = action.payload
    }
  },
});

const findCartItem = (items, id, color, size) => {
  return items.find(item =>
    item.id === id &&
    item.color === color &&
    item.size === size
  );
};

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, setPromoCodeDiscount } = cartSlice.actions;
export default cartSlice.reducer;
