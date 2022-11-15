import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const allJobSlice = createSlice({
  name: "allJob",
  initialState: [],
  reducers: {
    giveAllJob (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { giveAllJob } = allJobSlice.actions;
export const allJobReducer = allJobSlice.reducer;