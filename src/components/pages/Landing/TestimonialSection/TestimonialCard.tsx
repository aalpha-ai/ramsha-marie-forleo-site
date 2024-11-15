/**
 * This code was generated by Builder.io
 */
import React from "react";

interface TestimonialCardProps {
  imageSrc: string;
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quote,
  author,
}) => {
  return (
    <div className="flex flex-wrap justify-center p-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-end px-8 py-2.5 w-[152px]">
        <img
          
          src={imageSrc}
          alt={`${author}'s profile`}
          className="object-contain aspect-square w-[110px] max-md:mr-0"
        />
      </div>
      <div className="flex flex-col py-5 pr-7 pl-9 rounded-2xl border border-black border-solid bg-stone-50 min-w-[240px] w-[608px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col py-1.5 pr-8 w-full tracking-normal leading-6 text-black max-w-[547px] max-md:pr-5 max-md:max-w-full">
          <p className="text-base font-light">{quote}</p>
        </div>
        <div className="flex flex-col self-start pt-4 text-sm font-bold tracking-widest leading-6 text-center uppercase text-stone-400">
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
