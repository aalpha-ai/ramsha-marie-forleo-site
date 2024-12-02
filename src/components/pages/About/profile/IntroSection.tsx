import * as React from "react";
import { TextBlock } from "./TextBlock";
import { IntroSectionProps } from "./types";

export const IntroSection: React.FC<IntroSectionProps> = ({
  mainText,
  subTexts,
  highlightText,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center px-28 mt-11 w-full bg-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col px-20 pt-10 pb-14 max-w-full w-[800px] max-md:px-5">
        <div className="flex z-0 flex-col items-center px-6 py-2.5 w-full text-2xl tracking-wide leading-10 text-center text-black max-md:pl-5 max-md:max-w-full">
          <div className="max-md:max-w-full">{mainText}</div>
          <div className="flex flex-wrap gap-4 self-stretch mt-5">
            {subTexts.map((text, index) => (
              <TextBlock key={index} {...text} />
            ))}
          </div>
          <div className="mt-5 font-bold">{highlightText}</div>
        </div>
        <div className="flex overflow-hidden absolute -left-4 z-0 flex-col max-w-full bottom-[136px] right-[709px] top-[-43px] w-[107px]">
          <div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[132px]">
            <img
              loading="lazy"
              src={imageSrc}
              alt="Profile decorative element"
              className="object-contain w-full aspect-[0.81]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
