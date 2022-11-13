import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    changeLoadingStatus (state, action) {
      state = action.payload;
      console.log(`loading SLICE! ${action.payload}`);

      return state;
    }
  }
});

export const { changeLoadingStatus } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;