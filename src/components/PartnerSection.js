import React from "react";
import "./PartnerSection.css";
import NitdaLogo from "../assets/NITDA-logo-newest-1-removebg-preview.png";
import mttLogo from "../assets/3mtt-removebg-preview.png";
import Kogilogo from "../assets/kogi logo.png";
import MistLogo from "../assets/MIST_Logo-removebg-preview.png";
const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-logos">
        <div className="partner-card">
          <img src={NitdaLogo} alt="NITDA Logo" />
        </div>
        <div className="partner-card">
          <img src={mttLogo} alt="3MTT Logo" />
        </div>
        <div className="partner-card">
          <img src={Kogilogo} alt="Kogi State Logo" />
        </div>
        <div className="partner-card">
          <img src={MistLogo} alt="MIST Logo" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
