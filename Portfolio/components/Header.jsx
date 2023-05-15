import React, { useEffect } from "react";
import {  Link  } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';




export default function Header () {
// Allows me to use smooth scrolling & react router for Contact section

useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact") {
      setTimeout(function() {
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      }, 500);
    }
  }, [window.location.hash]);

  

    function scrollToTop () {
        
        if (window.location.pathname === "/") {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        }
    }
    

    return (
        <div className="headerBackground">
            <h1 className="h1Name">Jack Mitchell</h1>
            <ul className="headerList">
       
            <li><Link className="RouterLink" to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link className="RouterLink" to="/aboutmepage">About Me</Link></li>
                <li><Link className="RouterLink" to="/projectspage">Projects</Link></li>
            
            {window.location.pathname === "/" ?
          
                <SmoothLink
                    to="contact" 
                    className="SmoothLink"     
                    smooth={true}       
                    duration={500}       
                    offset={-70}        
                    activeClass="active">
                    Contact
                </SmoothLink>
            :
                <li><Link className="RouterLink" to="/#contact">Contact</Link></li>
            }   
            </ul>
        </div>
    )
}