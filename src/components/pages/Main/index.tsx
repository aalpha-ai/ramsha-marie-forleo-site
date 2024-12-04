'use client'

import React, { useState, useEffect } from "react";
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
import Modal from "@/components/common/Modal";
import SubscriptionForm from "./LearnAnything/Form/SubscriptionForm";

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-body">
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

      {/* Subscription Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">Sign up to receive updates and exclusive content!</p>
          <SubscriptionForm />
        </div>
      </Modal>
    </div>
  );
}
