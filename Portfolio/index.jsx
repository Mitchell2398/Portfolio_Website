import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from "react-router-dom"




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


  // const router = createBrowserRouter([
  //   { path: "/", element: <App />, }, 
  //   { path: "/aboutmepage", element: <AboutMePage />, },
  //   { path: "/projectspage", element: <ProjectsPage />, },
  //   { path: "/", element: <IndivProjectsPage />,},
  //   { path: "/projects/:projectId", element: <IndivProjectsPage />, },
  //    ]);