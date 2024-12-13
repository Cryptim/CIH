import React from "react";
import "../components/HeroSection.css"; // Add a CSS file for the overlap design
import Frame5 from "../assets/Frame5.png";
import SideArrow from "../assets/arrow-right-02.png";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-container">
        <h1>Connecting Aspiring Tech Talents with Experienced Mentors</h1>
        <p>
          By connecting aspiring tech talents with mentors and providing
          tailored resources, we empower individuals to build skills, boost
          employability, and drive technological growth in Kogi State and
          beyond.
        </p>
        <div className="action-buttons">
          <button className="mentor-button">Search for a Mentor</button>
          <div className="resources-button">
            Access Resources <img src={SideArrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={Frame5} alt="Team working with technology" />
        <button className="tag tag-collaborations">Collaborations</button>
        <button className="tag tag-volunteerism">Volunteerism</button>
        <button className="tag tag-mentorship">Mentorship</button>
        <button className="tag tag-empowerment">Empowerment</button>
        <button className="tag tag-free-resources">Free Resources</button>
        <button className="tag tag-partnership">Partnership</button>
      </div>
    </div>
  );
};

export default HeroSection;
