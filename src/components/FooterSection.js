import React from "react";
import "./FooterSection.css"; // Import your CSS styles

import CIH from "../assets/logo.png";
import FacebookIcon from "../assets/facebook-02.png";
import TwitterIcon from "../assets/Vector.png";
import LinkedInIcon from "../assets/linkedin-02.png";
import InstagramIcon from "../assets/instagram.png";

const FooterSection = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="logo-section">
            <img src={CIH} alt="Logo" className="logo" />
            <p className="footerLogo">
              Empowering Kogi's Brightest Minds for a Future in Tech
            </p>
          </div>
          <div className="links-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Workshops & Events</a>
              </li>
              <li>
                <a href="#">Resources/Pathways</a>
              </li>
              <li>
                <a href="#">Volunteer</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="donate-section">
            <button>Donate Now</button>
            <h3>Connect with Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>All rights reserved 3MTT HACKATHON Challenge ©2024</p>
      </div>
    </>
  );
};

export default FooterSection;
