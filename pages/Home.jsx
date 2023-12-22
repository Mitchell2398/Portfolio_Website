import React from "react";
import Header from "/components/Header.jsx";
import Hero from "/components/Hero.jsx";
import AboutMe from "/components/AboutMe.jsx";
import Projects from "/components/Projects.jsx";
import Connect from "/components/Connect.jsx";
import projectData from "/project-data/projectData.json"
import aboutMeHp from "/project-data/aboutMeHp.json"
import Footer from "../components/Footer";

export default function Home() {



  return (
    <div>
      <Header />
      <Hero />
      <AboutMe aboutMe={aboutMeHp} />
      <Projects projectData={projectData} />
      <Connect />
      <Footer />
    </div>
  );
}
