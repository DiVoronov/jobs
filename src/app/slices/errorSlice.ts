import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: false,
  reducers: {
    changeErrorStatus (state, action) {
      state = action.payload;
      console.log(`error SLICE! ${action.payload}`);
      return state;
    }
  }
});

export const { changeErrorStatus } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;