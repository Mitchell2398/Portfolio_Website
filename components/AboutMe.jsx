import React from "react";

export default function AboutMe(props) {
  return (
    <div className="aboutMeWrapper" id="aboutMe">
      <div className="aboutMeContainer">
        <div className="aboutMeIntro">
          <img
            className="doodle"
            src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845526/Icons_SVG/doodle_bi3mtk.svg"
          />

          <div className="aboutMeTextWrapper">
            <h1 className="aboutMeTitle">Hi, I'm Jack.</h1>
            <div className="aboutMeText">
              <p>
                I am a self-taught developer with a keen interest in frontend
                development, a journey I began over two years ago. My education,
                a blend of YouTube tutorials, reading, and classes, has equipped
                me with essential skills in HTML, CSS, and JavaScript, along
                with a familiarity with frameworks like React JS and SASS like Tailwind. <br />
                
                <br />My focus has been on creating user-friendly, responsive designs
                that prioritize user experience. In my projects, I strive to
                balance functionality with clean, efficient code. I am a
                problem-solver at heart, always eager to learn new techniques
                and collaborate with others in the tech community. As I continue
                to grow in this field, I look forward to contributing to
                meaningful projects and further developing my skills as a
                frontend developer.
              </p>
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
          <img
            className="icon"
            src="https://res.cloudinary.com/dheko2ynz/image/upload/v1688845525/Icons_SVG/js01-svgrepo-com_wtlu0h.svg"
          />
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
          {/* <a
            className="aboutMeBtn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1LzduXOKTevmp3rih0CpIkwq3f3BA9wma/view?usp=sharing"
              )
            }
          >
            View cv
          </a> */}
        </div>
      </div>
    </div>
  );
}
{
}
