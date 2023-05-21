import React from "react";
import Header from "/components/Header";
import ProjectTemplate from "../components/ProjectTemplate";
import { v4 as uuidv4 } from 'uuid';

export default function Projects() {
  const [projectTempData, setProjectTempData] = React.useState([]);
  

//   Gets data to use in the grid
  React.useEffect(() => {
    fetch("/project-data/ProjectTemplateData.json")
      .then((response) => response.json())
      .then((data) => setProjectTempData(data));
  }, []);



//   Renders grid
const renderProjectTemplate = projectTempData.projectGrid ? (
    projectTempData.projectGrid.map((data) => (
      <ProjectTemplate
        key={uuidv4()}
        img={data.img}
        alt={data.alt}
        h4={data.h4}
        projectId={data.id}
      />
    ))
  ) : null;




//   Component for individual project pages 
 

  return (
    <div className="projectsPageContainer">
      <Header />
      <h1 className="projectPageTitle">Projects</h1>
      <div className="projectsGridContainer">
        {renderProjectTemplate}
      </div>
    </div>
  );
}
