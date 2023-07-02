import React from "react";


export default function AboutMe(props) {


  return (
    <div className="aboutMeWrapper" id="aboutMe">
      <div className="aboutMeContainer" >
        <div className="aboutMeIntro">
        <img className="doodle" src="/assets/doodle.svg" />

          
          <div className="aboutMeTextWrapper">
          <h1 className="aboutMeTitle">About me.</h1>
          <p className="aboutMeText" >{props.aboutMe}</p>
          </div>
        </div>

        <div className="techStack">

          <img className="icon" src="./assets/Icons_SVG/html-124-svgrepo-com.svg" />
          <img className="icon" src="./assets/Icons_SVG/css3-02-svgrepo-com.svg" />
          <img className="icon" src="./assets/Icons_SVG/js01-svgrepo-com.svg" />
          <img className="icon" src="./assets/Icons_SVG/react-svgrepo-com.svg" />
          <img className="icon" src="./assets/Icons_SVG/github-square-svgrepo-com.svg" />
</div>
        
        <div className="aboutMeBtnContainer">
          <a className="aboutMeBtn" onClick={() => window.open("https://drive.google.com/file/d/1LzduXOKTevmp3rih0CpIkwq3f3BA9wma/view?usp=sharing")}>View cv</a>
        </div>
      </div>
    </div>
  );
}
{/* <img className="profileImage" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1682169073/IMG-0853_yyxvn3.jpg" /> */}