import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default filtersSlice.reducer;
