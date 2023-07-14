import React from "react";
import Header from "/components/Header.jsx";
import Hero from "/components/Hero.jsx";
import AboutMe from "/components/AboutMe.jsx";
import Projects from "/components/Projects.jsx";
import Connect from "/components/Connect.jsx";

export default function Home() {
  const [projectData, setProjectData] = React.useState([]);
  const [aboutMeHp, setAboutMeHp] = React.useState({});

  React.useEffect(() => {
    fetch("https://res.cloudinary.com/dheko2ynz/raw/upload/v1688845758/project-data/projectData_im1gsv.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data));

      fetch("https://res.cloudinary.com/dheko2ynz/raw/upload/v1689348150/aboutMeHp_b6yrip.json")
      .then((response) => response.json())
      .then((data) => setAboutMeHp(data));
      
  }, []);


  return (
    <div>
      <Header />
      <Hero />
      <AboutMe aboutMe={aboutMeHp} />
      <Projects projectData={projectData} />
      <Connect />
    </div>
  );
}
