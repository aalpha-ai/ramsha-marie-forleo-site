'use client'

import React, { useState } from "react";
import Header from "@/components/common/Header";
import HeroSection from "./HeroSection";
import LearnAnything from "./LearnAnything";
import MediaLogos from "./MediaLogos";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import HeroImage from "./HeroImage";
import PodcastSection from "./PodcastSection";
import StudentSuccessStories from "./StudentSuccessStories";
import ImageGallery from "./ImageGallery";
import HeroParralax from "./HeroParralax";
import Footer from "@/components/common/Footer";
import CorporateBooking from "./CorporateBooking";
import RichReciever from "./RichReceiver";
import DialogSubscribe from "@/components/common/DialogSubscribe";

export default function Component() {

  return (
    <div className="font-body">
      <DialogSubscribe />
      <Header />
      <HeroSection />
      <LearnAnything />
      <LandingPage />
      <MediaLogos />
      <HomePage />
      <HeroImage />
      <PodcastSection />
      <RichReciever />
      <CorporateBooking />
      <StudentSuccessStories />
      <ImageGallery />
      <HeroParralax />
      <Footer />
    </div>
  );
}
