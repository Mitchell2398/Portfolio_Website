import React from "react";
import Header from "/components/Header";
import AboutMe from "../components/AboutMe";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";


export default function Home () {
    const [projectData, setProjectData] = React.useState([])


    React.useEffect(() => {
    fetch("projectData.json")
    .then(response => response.json())
    .then(data => setProjectData(data))
    }, [])

    const renderAboutMe = projectData.map(data => (
        data.aboutMe
    ))

return (
    <div>
        <Header />
        <AboutMe
            aboutMe={renderAboutMe} 
            />
        <Carousel 
            projectDataProps={projectData}/>
        <Contact  />
    </div>
)
}