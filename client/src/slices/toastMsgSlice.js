import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  varient: "",
  message: "",
};

const toastMsg = createSlice({
  initialState,
  name: "toast",
  reducers: {
    success: function (state, actions) {
      return {
        ...state,
        isOpen: true,
        varient: "success",
        message: actions.payload,
      };
    },
    error: function (state, actions) {
      return {
        ...state,
        isOpen: true,
        varient: "error",
        message: actions.payload,
      };
    },
    close: function (state) {
      return {
        ...state,
        isOpen: false,
        varient: "",
        message: "",
      };
    },
  },
});
export const { success, error, close } = toastMsg.actions;
export default toastMsg.reducer;
