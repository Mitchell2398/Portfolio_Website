import React from "react";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/ProjectsPage";


export default function App () {
    return (

    // <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/aboutmepage" element={<AboutMePage/>} />
    //     <Route path="/projectspage" element={<ProjectsPage/>} />
    // </Routes>
        <Home />
    )
}

// Fix components stacking 