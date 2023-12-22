// Footer.jsx
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-contact">
        <h3>Contact</h3>
        <p>Email: jackmitchellportfolio@gmail.com</p>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <a href='/'>Home</a>
        <a href='#aboutMe'>About me</a>
        <a href="#projects">Projects</a>
        <a href="#connect">Connect</a>
      </div>
      <div className="footer-social">
        <h3>Follow Me</h3>
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        <a href="https://twitter.com/yourusername">Twitter</a>
      </div>
      
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Jack Mitchell. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;