import { createSlice, configureStore } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    value: false,
    token: "",
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
