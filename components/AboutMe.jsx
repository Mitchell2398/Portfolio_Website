import React from "react";

export default function AboutMe(props) {
  return (
    <div className="aboutMeWrapper" id="aboutMe">
      <div className="aboutMeContainer">
        <div className="aboutMeIntro">
          <img className="doodle" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845526/Icons_SVG/doodle_bi3mtk.svg" />

          <div className="aboutMeTextWrapper">
            <h1 className="aboutMeTitle">About me.</h1>
            <div className="aboutMeText">
            <p>{props.aboutMe.introduction}</p>
            <p>{props.aboutMe.drive}</p>
            <p>{props.aboutMe.dedication}</p>
            </div>
          </div>
        </div>

        <div className="techStack">
          <img
            className="icon"
            src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845525/Icons_SVG/html-124-svgrepo-com_u02ve1.svg"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845525/Icons_SVG/css3-02-svgrepo-com_ix35tb.svg"
          />
          <img className="icon" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845525/Icons_SVG/js01-svgrepo-com_wtlu0h.svg" />
          <img
            className="icon"
            src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845527/Icons_SVG/react-svgrepo-com_fjodmm.svg"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845525/Icons_SVG/github-square-svgrepo-com_thj0z0.svg"
          />
        </div>

        <div className="aboutMeBtnContainer">
          <a
            className="aboutMeBtn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1LzduXOKTevmp3rih0CpIkwq3f3BA9wma/view?usp=sharing"
              )
            }
          >
            View cv
          </a>
        </div>
      </div>
    </div>
  );
}
{
  
}
