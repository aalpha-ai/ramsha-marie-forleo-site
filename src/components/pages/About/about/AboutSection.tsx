import * as React from "react";
import { TextBlock } from "./TextBlock";
import { AboutSectionProps } from "./types";

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  textBlocks,
}) => {
  return (
    <div className="flex flex-col px-2.5 text-base tracking-normal leading-8 text-black min-h-[1px] min-w-[240px] w-[538px] max-md:max-w-full">
      <div className="flex flex-col gap-4 px-14 pt-12 pb-14 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="w-full text-5xl tracking-wider leading-[62.4px] text-neutral-800">
          {title}
        </div>
        {textBlocks.map((content, index) => (
          <TextBlock key={index} content={content} />
        ))}
      </div>
    </div>
  );
};
