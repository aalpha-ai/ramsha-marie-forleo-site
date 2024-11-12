/**
 * This code was generated by Builder.io.
 */
import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BlurFade from "@/components/magicui/blur-fade";

const HeroSection: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 max-lg:px-8 max-md:px-5 max-md:flex-col">
      <div className="pb-10">
        <BlurFade inViewMargin="-200px">
          <HeroContent />
        </BlurFade>
      </div>
      <div>
        <BlurFade inViewMargin="-200px">
          <HeroImage />
        </BlurFade>
      </div>
    </section>
  );
};

export default HeroSection;
