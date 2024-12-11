/**
 * This code was generated by Builder.io
 */
import React from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import WaitlistButton from "./WaitlistButton";

const WaitlistSection: React.FC = () => {
  return (
    <section 
      className="bg-black flex flex-col justify-start items-center pt-20 md:pt-0 pb-56 pr-36 pl-36 text-center min-h-[800px] max-md:px-5 max-md:py-24 relative"
      style={{
        backgroundImage: "url('/ramsha-pics/webp/gf33.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="flex flex-col items-center self-stretch px-14 py-16 lg:py-0 max-md:px-5">
        <Logo />
        <Heading />
      </div>
      <div className="flex flex-col items-center self-stretch px-14 lg:pt-40 max-md:px-5">
        <WaitlistButton />
      </div>
    </section>
  );
};

export default WaitlistSection;
