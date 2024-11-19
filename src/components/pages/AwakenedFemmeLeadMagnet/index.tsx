import React from "react";

import { DreamClub } from "./header/DreamClub";
import HeroSection from "./hero/HeroSection";
import { DreamClubHero } from "./dreamClub/DreamClubHero";
import { Footer } from "./footer/Footer";

export default function Component() {
  return (
    <>
      <section className="flex flex-col items-center">
        <DreamClub />
        <HeroSection texts={[
          { text: "You Do Not Have To Settle for the Status Quo" },
        ]} />
        <DreamClubHero /> 
        <Footer />
      </section>
    </>
  );
}
