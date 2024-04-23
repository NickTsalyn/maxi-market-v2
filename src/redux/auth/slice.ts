import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

interface User {
 
  login: string | null;
  password: string | null;
}

interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
}

const initialState: AuthState = {
  user: {  login: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoading = false;
          state.isLoggedIn = true;
        }
      )
      .addCase(login.rejected, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.errorMessage = action.payload.toString();
          state.isError = true;
        }
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = {  login: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isError = true;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(register.fulfilled, (state,action: PayloadAction<{ user: User; token: string }>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.errorMessage = action.payload.toString();
          state.isError = true;
        }
      })
  },
});

export const authReducer = authSlice.reducer;
