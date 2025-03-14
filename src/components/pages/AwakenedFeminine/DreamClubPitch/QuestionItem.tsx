/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from "next/image";

export interface QuestionItemProps {
  imageUrl: string;
  question: string;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({
  imageUrl,
  question,
}) => {
  return (
    <div className="flex items-start gap-2.5 mt-5 w-full max-md:max-w-full">
      <div className=" h-5 w-5">
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className="w-full object-contain"
        />
      </div>
      <div className="flex-1 text-base font-light tracking-normal leading-6">
        {question}
      </div>
    </div>
  );
};
