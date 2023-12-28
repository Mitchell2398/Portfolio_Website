import React from "react";

export default function AboutMe() {
  const hardSkills = [
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind",
    "Javascript",
    "React",
    "GIT",
    "NodeJS",
    "Firebase",
    "Supabase",
    "RESTful API",
    "Langchain",
    
  ];

  const softSkills = [
    "Leadership",
    "Public speaking",
    "Communication",
    "Problem solving",
    "Creative",
    "Adaptable",
    
  ];
  return (
    <div className="aboutMeWrapper" id="aboutMe">
      <div className="aboutMeLeft">

        <div className="skillsContainer">
          <h2 className="skillsTitle">Hard skills</h2>
          <div className="skillsRow">
          {hardSkills.map((skill) => {
            return (
              <div className="tagAbout" key={skill}>
                {skill}
              </div>
            );
          })}
          </div>
        </div>
        
        <div className="skillsContainer">
          <h2 className="skillsTitle">Soft skills</h2>
          <div className="skillsRow">
          {softSkills.map((skill) => {
            return (
              <div className="tagAbout tagGreen" key={skill}>
                {skill}
              </div>
            );
          })}
          </div>
        </div>
      </div>

      <div className="aboutMeRight">
        <div className="textWrapper">
        <h1 className="aboutMeTitle">About me</h1>
        <div className="aboutMeText">
          <p>
            I am a self-taught developer with a keen interest in frontend
            development, a journey I began over two years ago. I have a bachelors in Global Commerce 
            and have completed 2 internships giving me a unique perspective as a developer. I am currently
            currently enrolled in a 1 year software engineering conversion MSC.{" "}
            <br />
            <br />
            My focus has been on creating user-friendly AI driven apps with responsive designs that
            prioritize user experience. I am a problem-solver at
            heart, always eager to learn new techniques and collaborate with
            others. As I continue to grow in this field, I look forward developing my skills as a 
            developer.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
{
}
