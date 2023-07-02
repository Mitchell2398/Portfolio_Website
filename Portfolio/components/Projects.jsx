import React from "react"
import Project from "./Project"
import { v4 as uuidv4 } from 'uuid';



export default function Projects (props) {

  const renderProjects = props.projectData.map((project) => {
    return (
      <Project 
        className="item"
        gridArea={project.gridArea}
        img={project.img}
        title={project.title}
        subtitle={project.subtitle}
        key={uuidv4()}
      />
    );
  });
     
    
    return (
    <div className="projectsWrapper">
      <h1 className="projectsTitle">Projects.</h1>
      <div className="projectsContainer" id="projects">
       {renderProjects}
      </div>
    </div>
   
    )
}