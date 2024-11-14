import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FamiliarSoundSection from "./FamiliarSoundSection";
import MarieForleoSection from "./MarieForleoSection";
import MediaMentionsSection from "./MediaMentions";
import DreamClubSection from "./DreamClubSection";
import DreamClubList from "./DreamClubList";
import TestimonialSection from "./TestimonialSection";
import DreamClub from "./DreamClub";
import DreamClubImageSection from "./DreamClubImageSection";
import HighLevelTestminonial from "./HighLevelTestminonial";
import ImageSection from "./ImageSection";
import SectionComponent from "./SectionComponent";
import PricingSection from "./PricingSection";
import DreamClubPitch from "./DreamClubPitch";
import TestimonialCarousel from "./TestimonialCarousel";
import DreamsWorthSection from "./DreamsWorthSection";
import PlugIntoCommunitySection from "./PlugIntoCommunitySection";
import SecondTestimonialCarousel from "./SecondTestimonialCarousel";
import FAQSection from "./FAQSection";
import BookSectionWrapper from "./BookSectionWrapper";
import ContinuousEvolution from "./ContinuousEvolution";
import WaitlistSection from "./WaitlistSection/WaitlistSection";

export default function Component() {
  return (
    <div className="[&_*]:transition-all [&_*]:duration-500 bg-gray-50">
      <Header />
      <WaitlistSection />
      <FamiliarSoundSection />
      <MarieForleoSection />
      <MediaMentionsSection />
      <DreamClubSection />
      <DreamClubList />
      <TestimonialSection />
      <DreamClub />
      <DreamClubImageSection />
      <HighLevelTestminonial />
      <ImageSection />
      <SectionComponent />
      <PricingSection />
      <DreamClubPitch />
      <TestimonialCarousel />
      <DreamsWorthSection />
      <PricingSection />
      <PlugIntoCommunitySection />
      <SecondTestimonialCarousel />
      <FAQSection />
      <BookSectionWrapper />
      <PricingSection />
      <ContinuousEvolution />
      <Footer />
    </div>
  );
}
