import React from "react";
import "./HightlightCard.css"; // Assuming you have a CSS file for styling

// Importing assets
import ProfileImage from "../assets/CM.png";
import ArrowIcon from "../assets/arrow-right-02 green.png";

const HighlightCard = () => {
  return (
    <section className="highlight-card">
      <div className="profile-card">
        <div className="profile-image">
          <img src={ProfileImage} alt="Profile Photo" />
        </div>
        <div className="profile-details">
          <div className="profile-badge">FEATURED MENTOR</div>
          <h2>Omachoko Arome</h2>
          <p>
            He is a dedicated professional focused on empowering Nigerian youth
            through Marketing, Communications, and Youth Development. With a
            passion for bridging the gap between current challenges and future
            aspirations, he provides scholarships and learning opportunities
            through the Solve Education Grant Program, equipping young people
            with essential 21st-century skills.
          </p>
          <a href="#" className="profile-link">
            Browse Mentor Profile
            <img src={ArrowIcon} alt="mentor-arrow" height="24" width="24" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HighlightCard;
