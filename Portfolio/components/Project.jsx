import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

export default function Project(props) {
  const isSmallScreen = useMediaQuery({ maxWidth: 950 });


  return (
    <div
      className={`image-container ${props.gridArea}`}
      onClick={props.handleClick}
    >
      <img
        className="projectImg"
        src={props.img}
        alt="Background"
      />

   
        <div 
          className="imgOverlay"
          style={{opacity : isSmallScreen && 1}}
           />
    

    
        <div 
        className="overlayContainer"
        style={{opacity : isSmallScreen && 1}}
        >
          <h2 className="projectTitle">{props.title}</h2>
          <p className="projectSubtitle">{props.subtitle}</p>
          <div className="tagContainer">
            {props.tech.map((tech) => (
              <div className="tag" key={tech}>
                {tech}
              </div>
            ))}
          </div>
        </div>
     
    </div>
  );
}
