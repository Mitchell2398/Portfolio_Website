// Footer.jsx
import React from "react";
import { Link as SmoothLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>Email: jackmitchellportfolio@gmail.com</p>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <SmoothLink
          to="/" // Specify the target element's ID here
          smooth={true}
          duration={500}
          offset={0}
        >
          Home
        </SmoothLink>
        <SmoothLink to="aboutMe" smooth={true} duration={500} offset={-120}>
          About me
        </SmoothLink>
        <SmoothLink to="projects" smooth={true} duration={500} offset={-150}>
          Projects
        </SmoothLink>
        <SmoothLink to="connect" smooth={true} duration={500} offset={-70}>
          Connect
        </SmoothLink>
      </div>
      <div className="footer-social">
        <h3>Follow Me</h3>
        <a href="https://github.com/Mitchell2398" target="blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jack-mitchell-17a1ab164/"
          target="blank"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/jackm2398"
          target="blank"
          className="social"
        >
          Twitter
        </a>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Jack Mitchell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
