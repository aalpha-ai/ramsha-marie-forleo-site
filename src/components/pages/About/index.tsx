import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import React from "react";
import ImageLayout from "./imageLayout/ImageLayout"
import Profilepage from "./profile/ProfilePage"
import { BioContent } from "./bio"
import MediaLogos from "@/components/pages/Main/MediaLogos"
import { MilestonesSection } from "./milestones/MilestonesSection"
import { AboutPage } from "./about/AboutPage"
import { WelcomeSection } from "./welcomeSection/WelcomeSection";
import QuoteWithImageSection from "./QuoteWithImageSection";

export default function Component() {
  return (
    <div className="font-body text-[16px] bg-gray-50">
      <Header />
      {/* <ImageLayout /> */}
      <Profilepage />
      <BioContent />
      <QuoteWithImageSection />
      <MediaLogos />
      <MilestonesSection />
      <AboutPage />
      <WelcomeSection />
      <Footer />
    </div>
  );
}
