import React from "react";
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from './pages/AboutMePage';
import IndivProjPage from './components/indivProjPage';
import { Route, Routes } from "react-router-dom";



export default function App () {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutmepage" element={<AboutMePage />} />
            <Route path="/projectspage" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<IndivProjPage />} />
        </Routes>
        </div>

        
    )
}


