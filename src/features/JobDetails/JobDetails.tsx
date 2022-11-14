import L, { LatLngExpression } from "leaflet";
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../app/store";
import { IResponse } from "../../TypesResponse";
import "./JobDetails.style.scss";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MapCustom from "../shared/Map";
import { useAppDispatch } from "../../app/hooks";
import { pushSavedJob } from "../../app/slices/savedJobsSlice";

import Alert from "@mui/material/Alert";

export function JobDetails() {

  // const testArrayDetails = [
  //   {title: "title example 1", id: 1, sub: "subttitle 1", location: "LOCATION 1", photoURL: "https://url.", date: "date 1", description: "Description 1", benefits: "Benefits 1", additional: ["one: 1", "two: two 1", "three: 1"], attImages: ["image1-1", "image2-1", "image3-1"], salary: "all $10000", contacts: {adress: "adress 1", tel: "tel-1", email: "1-1@gmail.com"}},
  //   {title: "title example 2", id: 2, sub: "subttitle 2", location: "LOCATION 2", photoURL: "https://url.", date: "date 2", description: "Description 2", benefits: "Benefits 2", additional: ["one: 2", "two: two 2", "three: 2"], attImages: ["image1-2", "image2-2", "image3-2"], salary: "all $20000", contacts: {adress: "adress 2", tel: "tel-2", email: "2-2@gmail.com"}},
  //   {title: "title example 3", id: 3, sub: "subttitle 3", location: "LOCATION 3", photoURL: "https://url.", date: "date 3", description: "Description 3", benefits: "Benefits 3", additional: ["one: 3", "two: two 3", "three: 3"], attImages: ["image1-3", "image2-3", "image3-3"], salary: "all $30000", contacts: {adress: "adress 3", tel: "tel-3", email: "3-3@gmail.com"}},
  //   {title: "title example 4", id: 4, sub: "subttitle 4", location: "LOCATION 4", photoURL: "https://url.", date: "date 4", description: "Description 4", benefits: "Benefits 4", additional: ["one: 4", "two: two 4", "three: 4"], attImages: ["image1-4", "image2-4", "image3-4"], salary: "all $40000", contacts: {adress: "adress 4", tel: "tel-4", email: "4-4@gmail.com"}},
  //   {title: "title example 5", id: 5, sub: "subttitle 5", location: "LOCATION 5", photoURL: "https://url.", date: "date 5", description: "Description 5", benefits: "Benefits 5", additional: ["one: 5", "two: two 5", "three: 5"], attImages: ["image1-5", "image2-5", "image3-5"], salary: "all $50000", contacts: {adress: "adress 5", tel: "tel-5", email: "5-5@gmail.com"}},
  //   {title: "title example 6", id: 6, sub: "subttitle 6", location: "LOCATION 6", photoURL: "https://url.", date: "date 6", description: "Description 6", benefits: "Benefits 6", additional: ["one: 6", "two: two 6", "three: 6"], attImages: ["image1-6", "image2-6", "image3-6"], salary: "all $60000", contacts: {adress: "adress 6", tel: "tel-6", email: "6-6@gmail.com"}},
  //   {title: "title example 7", id: 7, sub: "subttitle 7", location: "LOCATION 7", photoURL: "https://url.", date: "date 7", description: "Description 7", benefits: "Benefits 7", additional: ["one: 7", "two: two 7", "three: 7"], attImages: ["image1-7", "image2-7", "image3-7"], salary: "all $70000", contacts: {adress: "adress 7", tel: "tel-7", email: "7-7@gmail.com"}},
  //   {title: "title example 8", id: 8, sub: "subttitle 8", location: "LOCATION 8", photoURL: "https://url.", date: "date 8", description: "Description 8", benefits: "Benefits 8", additional: ["one: 8", "two: two 8", "three: 8"], attImages: ["image1-8", "image2-8", "image3-8"], salary: "all $80000", contacts: {adress: "adress 8", tel: "tel-8", email: "8-8@gmail.com"}}
  // ];

  // let currentElement = testArrayDetails.filter( el => el.id === 1)[0];
  // const [numberOfElement, setNumberOfElement] = useState(currentElement);
  // console.log(numberOfElement);

  const allElements: IResponse[] = useSelector( (state: RootState) => state.allJob);
  const currentID: string = useSelector( (state: RootState) => state.currentJob);

  const currentJob = allElements.filter( (job: IResponse) => job.id === currentID)[0];

  const position: LatLngExpression = [currentJob.location.lat, currentJob.location.long];
  // const apiKey = "d20916eef2724fbfa9122628744fd389";

  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useAppDispatch();

  useMemo( () => {
    setTimeout(() => setShowAlert(false), 4000);
  }, [showAlert]);

  function pushSavedList (element: IResponse) {
    dispatch(pushSavedJob(element));
    setShowAlert(true);
  };

  const elementFullYear = currentJob.createdAt.toString().split("-")[0];
  const createdAgo = (2022 - parseInt(elementFullYear)).toString();

  function CallMap () {
    return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        attribution='&copy; <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://maps.geoapify.com/v1/tile/dark-matter-dark-grey/{z}/{x}/{y}.png?apiKey=d20916eef2724fbfa9122628744fd389"
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
    );
  };

  return (
    <div className="job-detail">
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
  );
};