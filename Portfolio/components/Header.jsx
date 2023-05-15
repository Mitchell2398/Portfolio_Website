import React from "react";
import {  Link  } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';




export default function Header () {
    return (
        <div className="headerBackground">
            <h1 className="h1Name">Jack Mitchell</h1>
            <ul className="headerList">
            <li><Link className="RouterLink" to="/">Home</Link></li>
                <li><Link className="RouterLink" to="/aboutmepage">About Me</Link></li>
                <li><Link className="RouterLink" to="/projectspage">Projects</Link></li>
                <SmoothLink
                    to="contact" 
                    className="SmoothLink"     
                    smooth={true}       
                    duration={500}       
                    offset={-70}        
                    activeClass="active">
                    Contact
                </SmoothLink>

            </ul>
        </div>
    )
}