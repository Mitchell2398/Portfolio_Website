import React from "react";
import { useParams } from "react-router-dom";
import Header from "/components/Header";


export default function IndivProjectPage () {
    const [indivProjData, setIndivProjData] = React.useState([]);
    const { projectId } = useParams();


    React.useEffect(() => {
        fetch(`/project-data/${projectId}.json`)
          .then((response) => response.json())
          .then((data) => setIndivProjData(data));
      }, [projectId]);

    return (
    <div className="indivProjContainer" id={indivProjData.id}>
        <Header />
        <div className="indivFlexContainer">
            <img className="indivProjImg" src={indivProjData.img}/>
            <h4 className="indivProjTitle">{indivProjData.title}</h4>
            <p className="indivProjDescription">{indivProjData.description}</p>
            <div className="btnContainer">
                <button className="indivProjBtn1">{indivProjData.vcBtn}</button>
                <button className="indivProjBtn2">{indivProjData.leBtn}</button>
            </div>
        </div>
    </div>
    )
  };