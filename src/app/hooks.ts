import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IResponse } from '../TypesResponse';
import { changeCurrentJob } from './slices/currentJobSlice';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export function useDispatchCurrentJobReducer(payload: IResponse){
//   const dispatch = useAppDispatch();
//   dispatch(changeCurrentJob(payload));
// };
