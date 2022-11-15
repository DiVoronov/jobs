import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../app/store";
import { IResponse } from "../../TypesResponse";
import "./JobDetails.style.scss";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useAppDispatch } from "../../app/hooks";
import { pushSavedJob } from "../../app/slices/savedJobsSlice";
import Alert from "@mui/material/Alert";
import { NoConnect } from "../NoConnect/NoConnect";

import L, { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export function JobDetails() {

  const allElements: IResponse[] = useSelector( (state: RootState) => state.allJob);
  const currentID: string = useSelector( (state: RootState) => state.currentJob);

  const currentJob = allElements.filter( (job: IResponse) => job.id === currentID)[0];

  function CallMap () {

    const allElements: IResponse[] = useSelector( (state: RootState) => state.allJob);
    const currentID: string = useSelector( (state: RootState) => state.currentJob);

    const currentJob = allElements.filter( (job: IResponse) => job.id === currentID)[0];

    const position: LatLngExpression = [currentJob.location.lat, currentJob.location.long];
    const apiKey = "d20916eef2724fbfa9122628744fd389";

    return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
        <TileLayer
            // ============== IF WANT TO LOAD FROM openstreetmap ================
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors'
            url={`https://maps.geoapify.com/v1/tile/dark-matter-dark-grey/{z}/{x}/{y}.png?apiKey=${apiKey}`}
        />
        <Marker position={position} pane="markerPane" shadowPane="shadowPane">
        </Marker>
    </MapContainer>
    );
  };

  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useAppDispatch();

  useMemo( () => {
    setTimeout(() => setShowAlert(false), 4000);
  }, [showAlert]);

  function pushSavedList (element: IResponse) {
    dispatch(pushSavedJob(element));
    setShowAlert(true);
  };

  function fullYear () {
    const elementFullYear = currentJob ? currentJob.createdAt.toString().split("-")[0] : "";
    return elementFullYear;
  }
  const createdAgo = (2022 - parseInt(fullYear())).toString();

  return (
    !currentID ? <NoConnect/> :
    (<div className="job-detail">
      <div className="second-div-adopt ">
        <div className="high-block-custom">
          <h2 className="title-custom">Job details</h2>
          <div>
            <button onClick={()=> pushSavedList(currentJob)}> <BookmarkBorderIcon fontSize="medium" color="action"/>Save to my list</button>
            <button> <ShareIcon fontSize="medium" color="action"/> <p>Share</p></button>
          </div>

        </div>
        <div className="line-custom"></div>

        <button className="button-custome" id="first-button">APPLY NOW</button>

        <div className="card-job-detail">
          <div id="card-job-for-sm-size" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="title-custom">{currentJob.name} / {currentJob.title}</div>

            <div className="salary">
              <span id="sub-title-custom">Brutto, per year:</span>
              <span>{currentJob.salary}</span>
            </div>

          </div>
          <div className="date-custom">{`Posted ${createdAgo} years ago`}</div>

          <div className="text-custom">
            <div>{currentJob.description}</div>
          </div>


          <button className="button-custome">APPLY NOW</button>
          <div className="sub-title-custom">Additional info</div>
          <div className="line-custom"></div>

          <div className="sub-title-custom-small">Benefits:</div>
          <div style={{display: "flex"}}>{currentJob.benefits.map( (element, index) => {
            return <div className="additional-box-custom" style={{background: "rgba(255, 207, 0, 0.15)", color: "#988B49", border: "1px solid #FFCF00"}} key={index}><span>{element}</span></div>
          })}</div>

          <div className="sub-title-custom-small">Employment type:</div>
          <div style={{display: "flex"}}>{currentJob.employment_type.map( (element, index) => {
            return <div className="additional-box-custom" style={{background: "rgba(161, 177, 219, 0.317343)", color: "#55699E", border: "1px solid rgba(85, 105, 158, 0.3)"}} key={index}><span>{element}</span></div>
          })}</div>

          <div className="sub-title-custom">Attached images:</div>
          <div className="line-custom"></div>
          <div className="div-attached-images">
            { currentJob.pictures.map( (element, index) => {
              return (
                <div key={index} className="for-pictures-custom">
                  <img src={`${element}/?random=${index}`}/>
                </div>
              )
            })}
          </div>

          <button className="button-custome" ><NavLink to={"/"}>Return to job board</NavLink></button>
        </div>
      </div>

        <div className="second-div-adopt">
          <div className="sub-title-custom">Contacts:</div>
          <div className="line-custom"></div>
          <div className="contacts-div-custom">
            <div>
              <div><h1>{currentJob.title}</h1></div>
              <div>{currentJob.address}</div>
              <div>{currentJob.phone}</div>
              <div>{currentJob.email}</div>
            </div>
            
            <div className="for-map-custom">
              <CallMap/>
            </div>
          </div>
        </div>

        { 
          showAlert &&
          <div style={{position: "fixed", left: "20px", bottom: "20px", background: "none", boxShadow: "none", zIndex: 1300}}>
            <Alert variant="filled" severity="info">
              <p style={{color: "white"}}>You have successfully added the Job to your list</p>
            </Alert>
          </div>
        }
      
    </div>
  )
  );
};