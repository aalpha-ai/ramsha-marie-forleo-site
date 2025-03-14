/**
 * This code was generated by Builder.io
 */
import React from "react";
import { TextContainer } from "./TextContainer";
import { Heading } from "./Heading";

interface DreamClubImageSectionProps {
  imageSrc: string;
}

const DreamClubImageSection: React.FC<DreamClubImageSectionProps> = ({
  imageSrc,
}) => {
  return (
    <section className="grid md:grid-cols-[1fr_1.25fr] text-base font-light leading-7 text-black">
      <div>
        <img
          loading="lazy"
          src={imageSrc}
          alt="Dream Club visual representation"
          className="object-cover w-full h-full max-md:max-h-[400px] lg:max-h-[825px] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col bg-ramsha-tertiary grow shrink justify-center items-start py-16 md:py-20 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col relative md:right-24 p-10 rounded-2xl border border-black border-solid bg-ramsha-secondary max-md:px-5 max-md:max-w-full">
          <Heading />
          <TextContainer />
        </div>
      </div>
    </section>
  );
};

export default DreamClubImageSection;
