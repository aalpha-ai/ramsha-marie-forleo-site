/**
 * This code was generated by Builder.io
 */
import React from "react";
import { TextBlock } from "./TextBlock";
import { StrongText } from "./StrongText";

interface CoachSectionProps {
  headingText: string[];
  paragraphs: string[];
  strongText: {
    regular: string;
    italic: string;
  };
  authorInfo: string[];
  imageSrc: string;
}

export const CoachSection: React.FC<CoachSectionProps> = ({
  headingText,
  paragraphs,
  strongText,
  authorInfo,
  imageSrc,
}) => {
  return (
    <section className="grid grid-cols-[1fr_.75fr] max-md:grid-cols-1 ">
      <div className="flex-1 flex flex-col items-center max-md:max-w-full">
        <div className="flex flex-col px-12 py-24 max-w-full  max-md:px-5">
          <h3 className="font-header flex flex-col pt-2.5 pb-3.5 text-4xl leading-[58px] text-neutral-800 max-md:max-w-full">
            {headingText.map((line, index) => (
              <React.Fragment key={index}>{line} </React.Fragment>
            ))}
          </h3>
          <div className="flex shrink-0 pb-6 h-6 max-md:max-w-full" />
          <div className="flex flex-col pb-4 tracking-normal leading-7 text-black max-md:max-w-full">
            {paragraphs.map((paragraph, index) => (
              <TextBlock key={index} text={paragraph} />
            ))}
            <StrongText
              regular={strongText.regular}
              italic={strongText.italic}
            />
            {authorInfo.map((info, index) => (
              <TextBlock key={index} text={info} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-start items-start bg-[50%] bg-cover max-md:min-h-[440px] md:min-h-[850px]"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      ></div>
    </section>
  );
};
