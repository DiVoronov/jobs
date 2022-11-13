import React from "react";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResponse } from '../../TypesResponse';

const initialState: IResponse[] = [];

export const savedJobsSlice = createSlice({
  name: "allJob",
  initialState,
  reducers: {
    pushSavedJob (state, action) {
      const isEqually = state.filter( (element) => element.id === action.payload.id );
      isEqually.length === 0 && state.push(action.payload);
      return state;
    }
  }
});

export const { pushSavedJob } = savedJobsSlice.actions;
export const savedJobsReducer = savedJobsSlice.reducer;