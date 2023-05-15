import React from "react"
import Project from "./Project"
import { v4 as uuidv4 } from 'uuid';

export default function Carousel (props) {

    const renderProject = props.projectDataProps.map(project => (
        <Project
          img={project.img}
          title={project.title}
          description={project.description}
          key={uuidv4()}
       />
      ));
    
    return (
    
    <div className="carouselContainer" id="projects">
      <h2 className="projectTitle">Projects</h2> 
     <div className="flexContainer">
       
        {renderProject}
     </div>
    </div>
   
    )
}