import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    type: "",
    colors: [],
    sizes: [],
    style: "",
    maxPrice: 1000,
  },
  reducers: {
    toggleType: (state, action) => {
      if (state.type === action.payload) {
        state.type = "";
      } else {
        state.type = action.payload;
      }
    },
    toggleColor: (state, action) => {
      if (state.colors.includes(action.payload)) {
        state.colors = state.colors.filter((color) => color !== action.payload);
      } else {
        state.colors.push(action.payload);
      }
    },
    toggleSize: (state, action) => {
      if (state.sizes.includes(action.payload)) {
        state.sizes = state.sizes.filter((size) => size !== action.payload);
      } else {
        state.sizes.push(action.payload);
      }
    },
    toggleStyle: (state, action) => {
      if (state.style === action.payload) {
        state.style = "";
      } else {
        state.style = action.payload;
      }
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    resetFilters: (state) => {
      state.types = [];
      state.colors = [];
      state.sizes = [];
      state.styles = [];
      state.maxPrice = 1000;
    },
  },
});

export const {
  toggleType,
  toggleColor,
  toggleSize,
  toggleStyle,
  setMaxPrice,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
