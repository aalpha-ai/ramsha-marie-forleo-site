import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "./HeroSection";
import FreeResourcesGrid from "./FreeResourcesGrid";
import EntrepreneurQuiz from "./EntrepreneurQuiz";

export default function Component() {
  return (
    <div className="[&_*]:transition-all [&_*]:duration-500 ">
      <Header />
      <HeroSection />
      <FreeResourcesGrid />
      <EntrepreneurQuiz />
      <Footer />
    </div>
  );
}
