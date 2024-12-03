import React from "react";

import { DreamClub } from "./header/DreamClub";
import HeroSection from "./hero/HeroSection";
import { OfferHero } from "./offer/OfferHero";
import { Footer } from "./footer/Footer";
import BottomBar from "@/components/common/BottomBar";

export default function Component() {
  return (
    <>
      <section className="flex flex-col items-center">
        <DreamClub />
        <HeroSection texts={[
          { text: "You Do Not Have To Settle For The Status Quo" },
        ]} />
        <OfferHero /> 
        <BottomBar />
      </section>
    </>
  );
}
