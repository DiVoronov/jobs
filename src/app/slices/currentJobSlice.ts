import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const currentJobSlice = createSlice({
  name: "currentJob",
  initialState: "",
  reducers: {
    changeCurrentJob (state, action) {
      state = action.payload;
      console.log(state);
      return state;
    }
  }
});

export const { changeCurrentJob } = currentJobSlice.actions;
export const currentJobReducer = currentJobSlice.reducer;