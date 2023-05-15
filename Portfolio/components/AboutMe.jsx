import React from "react";

export default function AboutMe (props) {
    return (
    <div className="aboutMeContainer" id="aboutMe">
        
       <h2 className="aboutMeTitle">About me</h2>
        <div className="aboutMeIntro">
        <img className="profileImage" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1682169073/IMG-0853_yyxvn3.jpg"/>
                <p>{props.aboutMe}</p>
                
           </div>

                
                <div className="techStack">
                    <img className="icon" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1682184882/icons8-html-5-96_febmtd.png" />
                    <img className="icon" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1682184882/icons8-css-96_xyny90.png" />
                    <img className="icon" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1682184882/icons8-javascript-96_yeghxr.png" />
                    <img className="icon" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1682184882/icons8-react-80_gaxeb4.png" />
                    <img className="icon" src="https://res.cloudinary.com/dheko2ynz/image/upload/v1682185161/icons8-github-90_shypym.png" />
                </div>

           </div>
    

    )
}

