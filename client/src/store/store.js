import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../slices/toastMsgSlice";
import authUserReducer from "../slices/authUserSlice";
import loadingReducer from "../slices/loadingSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    toast: toastReducer,
    authUser: authUserReducer,
    loading: loadingReducer,
  },
});

export default store;
