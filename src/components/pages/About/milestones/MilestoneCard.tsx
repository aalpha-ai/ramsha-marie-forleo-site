import * as React from "react";
import { MilestoneCardProps } from "./types";

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col grow shrink justify-center pt-11 min-w-[240px] w-[226px]">
      <div className="flex flex-col pb-16 w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full aspect-[0.78]"
        />
        <div className="pb-px mt-6 text-xs font-extrabold leading-5 uppercase text-neutral-800 tracking-[2.16px]">
          {title}
        </div>
        <div className="pt-2 pb-2.5 mt-3.5 text-base tracking-normal leading-8">
          {description}
        </div>
      </div>
    </div>
  );
};
