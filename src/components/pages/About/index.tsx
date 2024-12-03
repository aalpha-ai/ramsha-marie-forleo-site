import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import React from "react";
import ImageLayout from "./imageLayout/ImageLayout"
import Profilepage from "./profile/ProfilePage"
import { BioContent } from "./bio"
import { BiographyContainer } from "./biography/BiographyContainer";
import MediaLogos from "@/components/pages/Main/MediaLogos"
import { MilestonesSection } from "./milestones/MilestonesSection"
import { AboutPage } from "./about/AboutPage"
import { WelcomeSection } from "./welcomeSection/WelcomeSection";

export default function Component() {
  return (
    <div className="font-body bg-gray-50">
      <Header />
      <ImageLayout />
      <Profilepage />
      <BioContent />
      <BiographyContainer />
      <MediaLogos />
      <MilestonesSection />
      <AboutPage />
      <WelcomeSection />
      <Footer />
    </div>
  );
}
