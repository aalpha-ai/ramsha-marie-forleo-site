import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LearnAnything from "./LearnAnything";
import MediaLogos from "./MediaLogos";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import HeroImage from "./HeroImage";
import PodcastSection from "./PodcastSection";
import LatestEpisodes from "./LatestEpisodes/LatestEpisode";
import StudentSuccessStories from "./StudentSuccessStories";
import ImageGallery from "./ImageGallery";
import HeroParralax from "./HeroParralax";
import Footer from "./Footer";

export default function MarieforleoTemplate() {
  return (
    <div className="[&_*]:transition-all [&_*]:duration-500 ">
      <Header />
      <HeroSection />
      <LearnAnything />
      <LandingPage />
      <MediaLogos />
      <HomePage />
      <HeroImage />
      <PodcastSection />
      <LatestEpisodes />
      <StudentSuccessStories />
      <ImageGallery />
      <HeroParralax />
      <Footer />
    </div>
  );
}
