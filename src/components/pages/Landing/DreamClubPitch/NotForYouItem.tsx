/**
 * This code was generated by Builder.io
 */
import React from "react";

export interface NotForYouItemProps {
  imageUrl: string;
  content: string;
}

export const NotForYouItem: React.FC<NotForYouItemProps> = ({
  imageUrl,
  content,
}) => {
  return (
    <div className="flex flex-wrap items-start mt-5 w-full max-md:max-w-full">
      <div className="flex flex-col items-start pt-1 pr-2.5 max-w-[785px] w-[29px]">
        <img
          
          src={imageUrl}
          alt=""
          className="object-contain aspect-square w-[19px]"
        />
      </div>
      <div className="pr-8 text-base font-light tracking-normal leading-6 text-black min-w-[240px] max-md:max-w-full">
        {content}
      </div>
    </div>
  );
};
