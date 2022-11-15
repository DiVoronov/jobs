import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { jobsApi } from "./api/jobs.api";
import { allJobReducer } from "./slices/allJobSlice";
import { currentJobReducer } from "./slices/currentJobSlice";
import { errorReducer } from "./slices/errorSlice";
import { loadingReducer } from "./slices/loadingSlice";
import { savedJobsReducer } from "./slices/savedJobsSlice";

export const store = configureStore({
  reducer: {
    currentJob: currentJobReducer,
    allJob: allJobReducer,
    error: errorReducer,
    loading: loadingReducer,
    saved: savedJobsReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;