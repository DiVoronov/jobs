import React from "react";
import "./App.css";
import NavBar from "./features/NavBar/NavBat";
import { MainPage } from "./pages/Main/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobDetails } from "./features/JobDetails/JobDetails";
import { ResponseFromAPI } from "./features/ResponseFromAPI/ResponseFromAPI";
import { JobList } from "./features/JobList/JobList";
import { MyList } from "./features/MyList/MyList";

function App() {

  return (
    <div className="App">
      {/* <ResponseFromAPI/> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar/>
        <Routes>
          <Route path="*" element={<MainPage/>} />
          <Route path="/details" element={<JobDetails/>} />
          <Route path="/list" element={<MyList/>} />
          {/* <Route path="/1" element={<JobList/>} />
          <Route path="/2" element={<JobList/>} />
          <Route path="/3" element={<JobList/>} />
          <Route path="/4" element={<JobList/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
