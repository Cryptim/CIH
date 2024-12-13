import React from "react";
import "./EventsSection.css"; // Import your CSS file
import cloudAfrican from "../assets/cloud-african 1.png";
import digitalMarketing from "../assets/digital marketing.png";
import pythonWorkshop from "../assets/python.png";
import calendarIcon from "../assets/calendar-01.svg";
import clockIcon from "../assets/alarm-clock.svg";

const EventsSection = () => {
  return (
    <section className="events-section">
      <div className="events-section-container">
        <h2>Upcoming Events</h2>
        <div className="events-container">
          <div className="event-card">
            <div className="cardImage">
              <img
                src={cloudAfrican}
                alt="Cloud Computing Workshop"
                className="event-image"
              />
              <a className="OnlineEvent">Online Event</a>
            </div>
            <h3>Getting Started with Cloud Computing: A Beginner's Guide</h3>
            <p>
              This introductory workshop will guide you through the fundamentals
              of cloud computing.
            </p>
            <div className="event-info">
              <span className="event-date">
                <img src={calendarIcon} alt="Calendar Icon" className="icon" />
                December 5, 2024
              </span>
              <span className="event-time">
                <img src={clockIcon} alt="Clock Icon" className="icon" />
                10:00 AM - 12:00 PM
              </span>
            </div>
          </div>

          <div className="event-card">
            <div className="cardImage">
              <img
                src={digitalMarketing}
                alt="Social Media for Entrepreneurs"
                className="event-image"
              />
              <a className="OnlineEvent">Online Event</a>
            </div>
            <h3>Mastering Social Media for Digital Entrepreneurs</h3>
            <p>
              Discover content creation strategies, audience engagement
              techniques, and more.
            </p>
            <div className="event-info">
              <span className="event-date">
                <img src={calendarIcon} alt="Calendar Icon" className="icon" />
                December 5, 2024
              </span>
              <span className="event-time">
                <img src={clockIcon} alt="Clock Icon" className="icon" />
                10:00 AM - 12:00 PM
              </span>
            </div>
          </div>

          <div className="event-card">
            <div className="cardImage">
              <img
                src={pythonWorkshop}
                alt="Python Programming Workshop"
                className="event-image"
              />
              <a className="OnlineEvent">Online Event</a>
            </div>
            <h3>Intro to Python Programming: Building Your First App</h3>
            <p>
              This online workshop is perfect for beginners looking to learn
              Python programming.
            </p>
            <div className="event-info">
              <span className="event-date">
                <img src={calendarIcon} alt="Calendar Icon" className="icon" />
                December 5, 2024
              </span>
              <span className="event-time">
                <img src={clockIcon} alt="Clock Icon" className="icon" />
                10:00 AM - 12:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
