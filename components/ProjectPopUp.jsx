import React from "react";

export default function ProjectPopUp(props) {
  return (
    <div className={`projectPuContainer ${props.enablePu ? "active" : ""}`}>
      <div className="puWrapper">
        <div className="popUpHeader">
          <div onClick={props.handleClick} className="arrow"></div>
          <button className="backButton" onClick={props.handleClick}>
            Back to Projects
          </button>
        </div>
        <h1 className="projectTitle">{props.title}</h1>
        <p className="projectSubtitle">{props.subtitle}</p>
        <div className="imageContainer">
          <img src={props.img} className="projectPuImg" alt="Project Image" />
        </div>
        <h2 className="aboutPu">About</h2>
        <p className="fullDescription">{props.fullDescription}</p>
        <h2 className="technolgiesPu">Technologies</h2>
        <div className="tagContainer">
          {props.tech.map((tech) => {
            return <div className="tag">{tech}</div>;
          })}
        </div>
        <h2 className="linkTitle">Live Demo</h2>
        <a className="Linka">{props.liveDemo}</a>
        <h2 className="linkTitle">Github</h2>
        <a className="Linka">{props.github}</a>
      </div>
    </div>
  );
}
