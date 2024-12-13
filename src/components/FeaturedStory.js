import React from "react";
import "./FeaturedStory.css"; // Ensure you have a CSS file for the styles or inline styles
import Simoen from "../assets/Simeon ocheja 1.png";
import Arrowside from "../assets/arrow-right-02 green.png";

const FeaturedStory = () => {
  return (
    <div className="featuredStoryContainer">
      <img className="featuredStoryImage" src={Simoen} alt="Simeon Ocheja" />

      <div className="featuredStory">
        <span className="featuredStoryText">
          FEATURED STORY FROM KOGI TALENT
        </span>
        <h2 className="featuredStoryName">Simeon Ocheja</h2>
        <p className="featuredStoryParagraph">
          From struggling to code his first lines to landing a role as a
          full-stack developer, Abdul Musa's journey is one of resilience,
          learning, and mentorship. Kogi Technical Talent Foundation helped him
          unlock his potential...
        </p>
        <div className="featuredStoryMore">
          <button className="morefeatured">
            Read Simeon’s Full Journey
            <img src={Arrowside} alt="arrow-right-02" className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;
