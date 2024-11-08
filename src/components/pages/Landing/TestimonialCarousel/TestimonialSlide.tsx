/**
 * This code was generated by Builder.io
 */
import React from "react";

interface TestimonialSlideProps {
  quote: string;
  author: string;
  image: string;
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  quote,
  author,
  image,
}) => {
  return (
    <div className="flex flex-col p-20 max-md:px-5 max-md:max-w-full">
      <blockquote className="w-full text-3xl italic leading-10 text-black max-md:max-w-full">
        {quote}
      </blockquote>
      <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap items-center w-full min-h-[89px] max-md:max-w-full">
          <div className="flex flex-col items-start self-stretch pr-4 my-auto max-w-[756px] w-[104px]">
            <img
              loading="lazy"
              src={image}
              alt={`${author}'s profile`}
              className="object-contain aspect-square max-w-[741.2px] w-[89px]"
            />
          </div>
          <h5 className="self-stretch my-auto text-sm font-bold tracking-widest leading-6 uppercase text-neutral-800">
            {author}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
