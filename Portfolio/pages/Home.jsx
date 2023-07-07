import React from "react";
import Header from "/components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Connect from "../components/Connect";

export default function Home() {
  const [projectData, setProjectData] = React.useState([]);
  const [aboutMeHp, setAboutMeHp] = React.useState({});

  React.useEffect(() => {
    fetch("/project-data/projectData.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);

  React.useEffect(() => {
    fetch("/project-data/aboutMeHp.json")
      .then((response) => response.json())
      .then((data) => setAboutMeHp(data));
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <AboutMe aboutMe={aboutMeHp.aboutMe} />
      <Projects projectData={projectData} />
      <Connect />
    </div>
  );
}
