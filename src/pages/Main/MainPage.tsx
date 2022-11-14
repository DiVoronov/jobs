import React, { useEffect } from "react";
import { JobDetails } from "../../features/JobDetails/JobDetails";
import { JobList } from "../../features/JobList/JobList";
import { NoConnect } from "../../features/NoConnect/NoConnect";
import { Pagination } from "../../features/shared/Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Loader } from "../../features/shared/Loader/Loader";

import { IResponse } from '../../TypesResponse';
import { useAppDispatch } from "../../app/hooks";
import { useGetJSONbyTokenQuery } from "../../app/api/jobs.api";
import { giveAllJob } from "../../app/slices/allJobSlice";
// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";
import { changeCurrentJob } from "../../app/slices/currentJobSlice";
import { changeErrorStatus } from "../../app/slices/errorSlice";
import { changeLoadingStatus } from "../../app/slices/loadingSlice";

import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { responseObjects } from "../../responseObject";


export function MainPage() {

  // const errorStatus = useSelector( (state: RootState) => state.error);
  // const loadingStatus = useSelector( (state: RootState) => state.loading);
  
  // const { data: allJobs, error, isLoading } = useGetJSONbyTokenQuery("wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu");
  const dispatch = useAppDispatch();

  const allJobs: IResponse[] = responseObjects;
  const error = false;
  const isLoading = false;
  
  // const allJobsArray = useSelector( (state: RootState) => state.allJob);

  // function sendAllJob (element: IResponse[]) {
  //   dispatch(giveAllJob(element));
  // };
  // function sendFirstDetails (element: IResponse) {
  //   dispatch(changeCurrentJob(element));
  // };
  function responseTrue (element: IResponse[]) {
    // sendAllJob(element);
    // sendFirstDetails(element[0]);
    // changeError(false);
    dispatch(giveAllJob(element));
    dispatch(changeCurrentJob(element[0]));
    dispatch(changeErrorStatus(false));
  };

  // function changeError (status: Boolean) {
  //   dispatch(changeErrorStatus(status));
  // };

  useEffect( () => {
    allJobs && responseTrue(allJobs);
  }, [allJobs]);

  return (
    <>
      {/* { 
        isLoading ?
        <Loader/> :
        error ? 
        <NoConnect/> :
        allJobs && <JobList allJobs={allJobs} cortege={[0, 4]}/>
      }
      { !error && <Pagination/> } */}
      {/* <NavLink to="/1" >Download list of Jobs</NavLink> */}

      <Routes>
        <Route path="/" element={
          <>
            { 
              isLoading ?
              <Loader/> :
              error ? 
              <NoConnect/> :
              allJobs && <JobList allJobs={allJobs} cortege={[0, 4]}/>
            }
            { !error && <Pagination/> }
          </>
        } />
        <Route path="/2" element={
          <>
            { 
              isLoading ?
              <Loader/> :
              error ? 
              <NoConnect/> :
              allJobs && <JobList allJobs={allJobs} cortege={[5, 9]}/>
            }
            { !error && <Pagination/> }
          </>
        } />
        <Route path="/3" element={
          <>
            { 
              isLoading ?
              <Loader/> :
              error ? 
              <NoConnect/> :
              allJobs && <JobList allJobs={allJobs} cortege={[10, 14]}/>
            }
            { !error && <Pagination/> }
          </>
        } />
        <Route path="/4" element={
          <>
            { 
              isLoading ?
              <Loader/> :
              error ? 
              <NoConnect/> :
              allJobs && <JobList allJobs={allJobs} cortege={[15, 19]}/>
            }
            { !error && <Pagination/> }
          </>
        } />
      </Routes>
    </>
  );
};