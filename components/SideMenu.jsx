import React from "react";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";


export default function SideMenu (props) {

  function scrollToTop() {
    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
       props.handleClick()
    }
  }

  return (
    <div className={`sideMenuContainer ${props.isSideMenuClicked ? "active" : ""}`}>
    <ul className="sideMenuUl">
    <li>
      <Link
        className="RouterLinkSideMenu"
        to="/"
        onClick={scrollToTop}
      >
        Home
      </Link>
    </li>

    <li>
      <SmoothLink
        to="aboutMe"
        className="SmoothLinkSideMenu"
        smooth={true}
        duration={500}
        offset={15}
        activeClass="active"
        onClick={props.handleClick}
      >
        About Me
      </SmoothLink>
    </li>

    <li>
      <SmoothLink
        to="projects"
        className="SmoothLinkSideMenu"
        smooth={true}
        duration={500}
        offset={-150}
        activeClass="active"
        onClick={props.handleClick}
      >
        Projects
      </SmoothLink>
    </li>

    <SmoothLink
      to="connect"
      className="SmoothLinkSideMenu"
      smooth={true}
      duration={500}
      offset={50}
      activeClass="active"
      onClick={props.handleClick}
    >
      Connect
    </SmoothLink>
  </ul>
</div> 
  )
}