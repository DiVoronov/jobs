import React, { useState, useEffect, useMemo } from "react";
import { IResponse } from '../../TypesResponse';
import "./jobList.style.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { changeCurrentJob } from "../../app/slices/currentJobSlice";
import { useSelector } from "react-redux";
import { useGetJSONbyTokenQuery } from "../../app/api/jobs.api";
import { RootState } from "../../app/store";
import { RatingElement } from "../shared/Rating/Rating";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { pushSavedJob } from "../../app/slices/savedJobsSlice";

import Alert from "@mui/material/Alert";

type PropsLobList = {
  allJobs: IResponse[],
  cortege: number[]
};

export function JobList( props: PropsLobList ) {

  const currentElement = useSelector( (state: RootState) => state.currentJob);
  const allElements: IResponse[] = useSelector( (state: RootState) => state.allJob);

  const [showAlert, setShowAlert] = useState(false);

  useMemo( () => {
    setTimeout(() => setShowAlert(false), 4000);
  }, [showAlert]);

  const dispatch = useAppDispatch();
  function setSendDetails (element: string) {
    dispatch(changeCurrentJob(element));
  };

  function pushSavedList (element: IResponse) {
    dispatch(pushSavedJob(element));
    setShowAlert(true);
  };

  return (
    <div className="main-custom">
      { props.allJobs && props.allJobs.map( (element: IResponse, index: number) => {
        const elementFullYear = element.createdAt.toString().split("-")[0];
        const createdAgo = (2022 - parseInt(elementFullYear)).toString();

        if (index >= props.cortege[0] && index <= props.cortege[1]) { 
        return (
          <div style={{display: "flex"}} key={element.id}>
            <div>
                <img 
                  src={`${element.pictures[0]}/?random=${element.id}`}
                  alt="not avalible"
                />
              
              <div className="aboutCard" style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <header><NavLink to={"/details"} onClick={() => setSendDetails(element.id)}>{element.name}</NavLink></header>

                <span>{element.title}</span>
                <span style={{display: "flex", alignItems: "flex-start"}}><LocationOnIcon color="disabled"/><p>{element.address}</p></span>
              </div>
            </div>
            

            <div className="card-sub-describe">
              <RatingElement/>
              <div className="right-element-custom">
                <div style={{cursor: "pointer"}} onClick={()=> pushSavedList(element)}><BookmarkBorderIcon color="action"/></div>
                <div>{`Posted ${createdAgo} years ago`}</div>
              </div>
            </div>
          </div>
        )}
      })}
        { 
          showAlert &&
          <div style={{position: "fixed", left: "20px", bottom: "20px", background: "none", boxShadow: "none"}}>
            <Alert variant="filled" severity="info">
              <p style={{color: "white"}}>You have successfully added the Job to your list</p>
            </Alert>
          </div>
        }
    </div>
  );
};