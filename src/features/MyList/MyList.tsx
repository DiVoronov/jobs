import React, { useEffect } from "react";
import { JobDetails } from "../../features/JobDetails/JobDetails";
import { JobList } from "../../features/JobList/JobList";
import { NoConnect } from "../../features/NoConnect/NoConnect";
import { Pagination } from "../../features/shared/Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import { IResponse } from "../../TypesResponse";


export function MyList() {

  const mySavedJobs: IResponse[] = useSelector( (state: RootState) => state.saved);

  return (
    <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">Welcome</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your saved list of Jobs</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Here you can see your saved Jobs
            </p>
          </div>
        </div>

        <div style={{
          borderRadius: "20px",
          height: "1px",
          margin: "1rem auto",
          width: "90%",
          background: "#3A4562",
          mixBlendMode: "normal",
          opacity: "0.13"
        }}>
        </div>

      { mySavedJobs.length === 0 ? <p className="text-lg font-semibold leading-8 text-indigo-600">Your list is empty</p> : <JobList allJobs={mySavedJobs} cortege={[0, 19]} /> }
    </>
    
  )
};