import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    isAuthenticated: boolean;
    userName: string | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    userName: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        state.isAuthenticated = true;
        state.userName = action.payload
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.userName = null;
      }
      
    },
  });
  
  export const { login, logout } = authSlice.actions;
  export const authReducer = authSlice.reducer;