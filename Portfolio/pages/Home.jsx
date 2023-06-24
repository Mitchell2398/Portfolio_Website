import React from "react";
import Header from "/components/Header";
import AboutMe from "../components/AboutMe";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";


export default function Home () {
    const [projectData, setProjectData] = React.useState([])
    const [aboutMeHp, setAboutMeHp] = React.useState({})


    React.useEffect(() => {
    fetch("/project-data/projectData.json")
    .then(response => response.json())
    .then(data => setProjectData(data))
    }, [])

    React.useEffect(() => {
        fetch("/project-data/aboutMeHp.json")
        .then(response => response.json())
        .then(data => setAboutMeHp(data))
        }, [])


return (
    <div>
        <Header />
        <AboutMe
            aboutMe={aboutMeHp.aboutMe} 
            />
        <Carousel 
            projectDataProps={projectData}/>
        <Contact  />
    </div>
)
}