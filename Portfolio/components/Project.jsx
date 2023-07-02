import React from "react";

export default function Project(props) {
  const [hoverEffect, setHoverEffect] = React.useState(false);

  const handleMouseOver = () => {
    setHoverEffect(true);
  };

  const handleMouseOut = () => {
    setHoverEffect(false);
  };

  return (
    <div
      className={`image-container ${props.gridArea}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        className="projectImg"
        src={props.img}
        alt="Background"
      />

      {hoverEffect && (
        <div className="imgOverlay" />
      )}

      {hoverEffect && (
        <div className="overlayContainer">
          <h2 className="projectTitle">{props.title}</h2>
          <p className="projectSubtitle">{props.subtitle}</p>
          <div className="tagContainer">
            <div className="tag">React</div>
            <div className="tag">Javascript</div>
            <div className="tag">CSS</div>
          </div>
        </div>
      )}
    </div>
  );
}
