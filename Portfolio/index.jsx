import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import ProjectsPage from "./pages/ProjectsPage";
import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import AboutMePage from './pages/AboutMePage';



  const router = createBrowserRouter([
  { path: "/", element: <App />, }, 
  { path: "/aboutmepage", element: <AboutMePage />, },
  { path: "/projectspage", element: <ProjectsPage />, },
   ]);


  ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} />)