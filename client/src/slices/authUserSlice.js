import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authUser = createSlice({
  initialState,
  name: "user",
  reducers: {
    authenticated: function (state, actions) {
      return {
        ...state,
        isAuthenticated: true,
        user: actions.payload,
      };
    },
    isNotAuthenticated: function (state, actions) {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    },
  },
});

export const { authenticated, isNotAuthenticated } = authUser.actions;
export default authUser.reducer;
