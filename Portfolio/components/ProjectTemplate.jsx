import React from "react";
import { Link } from "react-router-dom";

//   Each individual project in the grid
export default function ProjectTemplate(props) {
    return (
      <Link to={`/projects/${props.projectId}`}>
      <div className="projectTempContainer">
        <img className="projectTempImg" src={props.img} alt={props.alt} />
        <h4 className="projectTemplateTitle">{props.h4}</h4>
      </div>
    </Link>
    );
  }


