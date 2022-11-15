import React, { useEffect } from "react";
import { JobList } from "../../features/JobList/JobList";
import { NoConnect } from "../../features/NoConnect/NoConnect";
import { Pagination } from "../../features/shared/Pagination/Pagination";
import { Loader } from "../../features/shared/Loader/Loader";
import { IResponse } from '../../TypesResponse';
import { useAppDispatch } from "../../app/hooks";
import { useGetJSONbyTokenQuery } from "../../app/api/jobs.api";
import { giveAllJob } from "../../app/slices/allJobSlice";
import { changeCurrentJob } from "../../app/slices/currentJobSlice";
import { changeErrorStatus } from "../../app/slices/errorSlice";
import { Routes, Route } from "react-router-dom";
import { responseObjects } from "../../responseObject";

export function MainPage() {

  const { data: allJobs, error, isLoading } = useGetJSONbyTokenQuery("wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu");
  const dispatch = useAppDispatch();

  // ========== !! IF API IS NOT AVAILABLE !! ================
  // const allJobs: IResponse[] = responseObjects;
  // const error = false;
  // const isLoading = false;
  
  function responseTrue (element: IResponse[]) {
    dispatch(giveAllJob(element));
    dispatch(changeCurrentJob(element[0]));
    dispatch(changeErrorStatus(false));
  };

  useEffect( () => {
    allJobs && responseTrue(allJobs);
  }, [allJobs]);

  return (
    <>
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