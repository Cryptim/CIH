import React from "react";
import "./WorkshopPage.css";
import HeroImage from "../assets/Resources image 1.png";
import VideoIcon from "../assets/bxs_video.png";
import VideoRecord from "../assets/fluent_video-recording-20-filled.png";
import Wpf from "../assets/wpf_online.png"
const WorkshopPage = () => {
  return (
    <div className="body-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Attend a Tech Workshop or Webinar</h1>
          <p>
            Access a variety of curated resources to kickstart or advance your
            career in tech. From coding tutorials to development frameworks, our
            free learning tools are designed to equip you with the skills needed
            to excel in the fast-evolving tech industry. Whether you're a
            beginner or an experienced coder, our resources will guide you at
            every stage of your journey.
          </p>
          <button className="btn-primary">See Upcoming Events</button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Tech Workshop" />
        </div>
      </section>

      {/* Workshops and Events Section */}
      <section className="workshops-section">
        <h2>Workshops and Events</h2>
        <div className="workshop-cards">
          <div className="card">
            <img src={VideoIcon} alt="Video ICon" className="VideoIcon" />
            <h3>Live Webinars</h3>
            <p>
              CIH hosts free, live webinars on tech skills. See a list of
              upcoming events in your location now.
            </p>
            <button className="btn-secondary">Upcoming Events</button>
          </div>
          <div className="card">
            <h3>Recorded Webinars</h3>
            <p>
              Did you miss a live webinar? They are available to watch on-demand
              at your convenience.
            </p>
            <button className="btn-secondary">Watch Now</button>
          </div>
          <div className="card">
            <h3>Online Courses</h3>
            <p>
              CIH on-demand well-curated online courses allow you to learn about
              various digital skills at your own pace.
            </p>
            <button className="btn-secondary">Join Now</button>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="events-section">
        <div className="event-card">
          <span className="event-tag">Online Event</span>
          <h3>Getting Started with Cloud Computing: A Beginner's Guide</h3>
          <p>
            This introductory workshop will guide you through the fundamentals
            of cloud computing.
          </p>
          <p>
            <strong>November 12, 2024</strong> | 11:00 AM - 1:00 PM
          </p>
        </div>

        <div className="event-card">
          <span className="event-tag">Online Event</span>
          <h3>Mastering Social Media for Digital Entrepreneurs</h3>
          <p>
            Discover content creation strategies, audience engagement
            techniques, and more.
          </p>
          <p>
            <strong>November 20, 2024</strong> | 3:00 PM - 5:00 PM
          </p>
        </div>

        <div className="event-card">
          <span className="event-tag">Online Event</span>
          <h3>Intro to Python Programming: Building Your First WorkshopPage</h3>
          <p>
            This online workshop is perfect for beginners looking to learn
            Python programming.
          </p>
          <p>
            <strong>December 5, 2024</strong> | 10:00 AM - 12:00 PM
          </p>
        </div>

        <div className="event-card">
          <span className="event-tag">Online Event</span>
          <h3>Intro to Python Programming: Building Your First WorkshopPage</h3>
          <p>
            This online workshop is perfect for beginners looking to learn
            Python programming.
          </p>
          <p>
            <strong>December 5, 2024</strong> | 10:00 AM - 12:00 PM
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkshopPage;
