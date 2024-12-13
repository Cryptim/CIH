import React from "react";
import "./MentorsSection.css"; // Ensure this file contains relevant styles
import CM from "../assets/CM.png";
import Omeza from "../assets/omeiza.png";
import ife from "../assets/ife.png";
import Timothy from "../assets/timothy.png";
import YellowArrow from "../assets/arrow-right-02 yellow.png";
const MentorsSection = () => {
  return (
    <section className="MentoredSection">
      <div className="mentors-section">
        <div className="mentors-info">
          <h2>Meet Our Mentors and Contributors</h2>
          <p>
            Meet Our MAt the heart of the Kogi Technical Talent Foundation is a
            dedicated team of mentors and contributors who are passionate about
            sharing their knowledge and expertise. Our mentors come from diverse
            backgrounds in technology, entrepreneurship, and innovation,
            providing invaluable guidance to help you navigate your career
            journey. Whether you’re looking to enhance your coding skills,
            explore new fields like digital marketing, or get advice on
            launching your own tech startup, our mentors are here to support you
          </p>
          <a href="#" className="mentor-profile-link">
            Explore Our Mentor’s Profile
            <img
              src={YellowArrow}
              alt="explore-arrow"
              height="24px"
              width="24px"
            />
          </a>
        </div>

        <div className="mentors-gallery">
          <div className="mentor-card mentor1">
            <p
              style={{
                backgroundColor: "#A7CAB7",
                height: "36px",
                width: "193px",
                borderRadius: "12px",
                marginLeft: "16px",
                color: "#3D4F60",
                marginBottom: "16px",
              }}
            >
              OMACHOKO AROME
            </p>
            <img src={CM} alt="Omachoko Arone" />
          </div>

          <div className="mentor-card" style={{ backgroundColor: "#D1C4DF" }}>
            <p
              style={{
                backgroundColor: "#D1C4DF",
                height: "36px",
                width: "193px",
                borderRadius: "12px",
                marginLeft: "16px",
                color: "#3D4F60",
                marginBottom: "16px",
              }}
            >
              IFEOLUWA J
            </p>
            <img src={ife} alt="IFEOLUWA J" />
          </div>
          <div className="mentor-card" style={{ backgroundColor: "#ADD1FB" }}>
            <p
              className="Mcp"
              style={{
                backgroundColor: "#ADD1FB",
                height: "36px",
                width: "193px",
                borderRadius: "12px",
                marginLeft: "16px",
                color: "#3D4F60",
                marginBottom: "16px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ISMAILA OHEIZA
            </p>
            <img src={Omeza} alt="Ismaila Oheiza" />
          </div>

          <div className="mentor-card" style={{ backgroundColor: "#EAE6DD" }}>
            <p
              style={{
                backgroundColor: "#EAE6DD",
                height: "36px",
                width: "193px",
                borderRadius: "12px",
                marginLeft: "16px",
                color: "#3D4F60",
                marginBottom: "16px",
              }}
            >
              TIMOTHY IGNIATIUS
            </p>
            <img src={Timothy} alt="Timothy Ignatius" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
