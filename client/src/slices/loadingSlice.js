import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
const loading = createSlice({
  initialState,
  name: "loading",
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loading.actions;

export default loading.reducer;
