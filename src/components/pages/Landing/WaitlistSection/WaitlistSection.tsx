/**
 * This code was generated by Builder.io
 */
import React from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import WaitlistButton from "./WaitlistButton";
import BlurFade from "@/components/magicui/blur-fade";

const WaitlistSection: React.FC = () => {
  return (
    <section className="bg-black flex justify-center items-center py-56 pr-36 pl-36 text-center min-h-[800px] max-md:px-5 max-md:py-24">
      <BlurFade>
        <div className="flex flex-col items-center self-stretch px-14 py-16 my-auto max-md:px-5">
          <Logo />
          <Heading />
          <WaitlistButton />
        </div>
      </BlurFade>
    </section>
  );
};

export default WaitlistSection;
