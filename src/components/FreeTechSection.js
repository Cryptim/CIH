import React from "react";
import "../components/FreeTechSection.css";
import Resource from "../assets/Resources image 1.png";
import BlueArrow from "../assets/arrow-right-02 blue.png";
const FreeTechSection = () => {
  return (
    <div className="freeTechSection">
      <div className="freeTechLearning">
        <div className="freeTechLearningContainer">
          <span className="freeTechLearningText">
            Free Tech Learning Resources
          </span>
          <h3 className="techTools">
            Tools and Knowledge to Accelerate Your Tech Journey
          </h3>
          <p className="techToolsParagraph">
            Access a variety of curated resources to kickstart or advance your
            career in tech. From coding tutorials to development frameworks, our
            resources are designed to equip you with the skills needed to excel
            in the fast-evolving tech world. Whether you're a beginner or an
            experienced coder, our resources will guide you through every stage
            of your journey.
          </p>
          <div className="backArrow">
            <a className="freeResources" href="#freeResources">
              Access Free Resources
              <img
                src={BlueArrow}
                alt="right-blue-arrow"
              />
            </a>
          </div>
        </div>
        <img src={Resource} alt="Tech Journey" className="Resource" />
      </div>
    </div>
  );
};

export default FreeTechSection;
