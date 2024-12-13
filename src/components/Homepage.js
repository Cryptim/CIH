// components/HomePage.js
import React from "react";
import HeroSection from "./HeroSection";
import FeaturedStory from "./FeaturedStory";
import FreeTechSection from "./FreeTechSection";
import WorkshopsSection from "./WorkshopsSection";
import EventsSection from "./EventsSection";
import MentorsSection from "./MentorsSection";
import PartnersSection from "./PartnerSection";
import HighlightCard from "./HightlightCard";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedStory />
      <FreeTechSection />
      <WorkshopsSection />
      <EventsSection />
      <MentorsSection />
      <PartnersSection />
      <HighlightCard />
    </div>
  );
};

export default HomePage;
