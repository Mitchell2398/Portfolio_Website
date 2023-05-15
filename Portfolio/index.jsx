import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import ProjectsPage from "./pages/ProjectsPage";
import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 


  const router = createBrowserRouter([
  { path: "/", element: <App />, }, 
  { path: "/projectspage", element: <ProjectsPage />, } ]);


  ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} />)