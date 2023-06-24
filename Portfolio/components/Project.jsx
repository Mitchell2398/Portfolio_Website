import React from "react";

export default function Project (props) {
    return (
    
            <div className="projectContainer">
                <img className="projectImg" src={props.img} />
                    <h4>{props.title}</h4>
                    <p className="projectDescription">{props.description}</p>
            </div>
    )
}