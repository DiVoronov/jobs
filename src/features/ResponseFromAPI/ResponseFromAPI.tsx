import React, { useEffect } from "react";
import { IResponse } from '../../TypesResponse';
import { useAppDispatch } from "../../app/hooks";
import { useGetJSONbyTokenQuery } from "../../app/api/jobs.api";
import { giveAllJob } from "../../app/slices/allJobSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { changeCurrentJob } from "../../app/slices/currentJobSlice";
import { changeErrorStatus } from "../../app/slices/errorSlice";
import { changeLoadingStatus } from "../../app/slices/loadingSlice";

export function ResponseFromAPI () {
  
  const { data: allJobs, error, isLoading } = useGetJSONbyTokenQuery("wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu");
  const dispatch = useAppDispatch();

  const allJobsArray = useSelector( (state: RootState) => state.allJob);

  function sendAllJob (element: IResponse[]) {
    dispatch(giveAllJob(element));
  };
  function sendFirstDetails (element: IResponse) {
    dispatch(changeCurrentJob(element));
  };
  function responseTrue (element: IResponse[]) {
    sendAllJob(element);
    sendFirstDetails(element[0]);
    changeError(false);
    changeLoading(false);
  };

  function changeError (status: Boolean) {
    changeLoading(false);
    dispatch(changeErrorStatus(status));
    console.log("error is active");
  };
  function changeLoading (status: Boolean) {
    dispatch(changeLoadingStatus(status));
    error && changeError(status);
    console.log("loading is active");

  };

  useEffect( () => {
    isLoading ? 
    changeLoading(true) :
    error ?
    changeError(true) :
    allJobs && responseTrue(allJobs);
  }, [allJobs]);

  return <></>
};