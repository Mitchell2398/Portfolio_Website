import React, { useState, useEffect } from "react";
import Project from "./Project";
import ProjectPopUp from "./ProjectPopUp";
import { v4 as uuidv4 } from "uuid";


export default function Projects(props) {
  const [enablePu, setEnablePu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function openPu(project) {
    setSelectedProject(project);
    setEnablePu(true);
  }

  function closePu() {
    setEnablePu(false);
  }

  // Disables scrolling when pop up is active
  useEffect(() => {
    if (enablePu) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [enablePu]);

  


  const renderProjects = props.projectData.map((project) => {
    return (
      <Project
        className="item"
        key={project.id}
        gridArea={project.gridArea}
        img={project.img}
        title={project.title}
        subtitle={project.subtitle}
        tech={project.tech}
        enablePu={enablePu}
        handleClick={() => openPu(project)}
      />
    );
  });

  return (
    <div 
      className="projectsWrapper"
     >
      <h1 className="projectsTitle">Projects.</h1>
      <div className="projectsContainer" id="projects">
        {renderProjects}
      </div>

      <div className={`darkOverlay ${enablePu ? 'active' : ''}`} />


      {enablePu && (
        <ProjectPopUp
          key={selectedProject.id}
          enablePu={enablePu}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          img={selectedProject.img}
          fullDescription={selectedProject.fullDescription}
          tech={selectedProject.tech}
          liveDemo={selectedProject.liveDemo}
          github={selectedProject.github}
          handleClick={closePu}
        />
      )}
    </div>
  );
}
