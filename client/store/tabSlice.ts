import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TabName = "Dashboard" | "Demo Accounts" | "Sales Material" | "Content Library";

export interface InitialTabState {
    currentTabName: TabName
}

const initialState: InitialTabState = {
    currentTabName: "Dashboard"
}

export const tabSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      selectTab: (state, action: PayloadAction<TabName>) => {
        state.currentTabName = action.payload
      } 
    },
  });
  
  export const { selectTab } = tabSlice.actions;
  export const tabReducer = tabSlice.reducer;