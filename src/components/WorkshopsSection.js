import React from "react";
import "./WorkshopsSection.css"; // Import the CSS file
import elearningexchange from "../assets/elearning-exchange.png";
import whiteArrow from "../assets/arrow-right-02 white.png";
import customTech from "../assets/nano-technology.png";
import onLine from "../assets/online-learning-04.png";
const WorkshopsSection = () => {
  return (
    <section className="workshops-section">
      <div className="workshops-section-container">
        <h2>What We Offer</h2>
        <div className="container">
          <div className="workshop-card">
            <div className="icon">
              <img src={elearningexchange} alt="Corporate Training Services" />
            </div>
            <h3>Corporate Training Services</h3>
            <p>
              We provide customized corporate training solutions designed to
              equip teams with cutting-edge skills and strategies for today’s
              competitive business environment.
            </p>
          </div>
          <div className="workshop-card">
            <div className="icon">
              <img src={customTech} alt="CustomTech icon" />
            </div>
            <h3>Custom Tech Solutions for Businesses</h3>
            <p>
              We provide bespoke technological solutions tailored to address
              your business challenges, improve operations, and achieve your
              unique goals.
            </p>
          </div>
          <div className="workshop-card">
            <div className="icon">
              <img src={onLine} alt="online Icon" />
            </div>
            <h3>Online Courses</h3>
            <p>
              Develop in-demand skills at your own pace with Confluence
              Innovation Hub’s online courses. Our expertly designed programs
              cover a range of topics to help you thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="whiteArrow">
          <a>
            View Our Services <img src={whiteArrow} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
