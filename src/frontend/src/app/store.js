import { createSlice, configureStore } from "@reduxjs/toolkit";
import { authCookieExists, getAuthCookie } from "../utilities/authUtilities";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    value: authCookieExists(),
    token: getAuthCookie(),
  },
  reducers: {
    authenticate: (state, action) => {
      state.value = true;
      state.token = action.payload;
    },
    deauthenticate: (state) => {
      state.value = false;
      state.token = "";
    },
  },
});

export const { authenticate, deauthenticate } = authenticationSlice.actions;

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
  },
});
