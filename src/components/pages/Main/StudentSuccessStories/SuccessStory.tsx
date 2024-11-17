/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Button } from "@/components/ui/button";

interface SuccessStoryProps {
  category: string;
  testimonial: string;
  author: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  category,
  testimonial,
  author,
}) => {
  return (
    <div className="flex flex-col px-5 md:px-12 pb-20 md:pb-8 pt-8 md:pt-10 lg:pt-16">
      <div className="inline-flex px-4 py-2 text-xs font-medium tracking-[2.24px] uppercase bg-white rounded-full h-[32px] items-center justify-center w-fit whitespace-nowrap">
        {category}
      </div>
      <blockquote className="mt-6 text-[20px] md:text-[16px] font-[400] leading-[1.6] tracking-normal text-black">
        {testimonial}
      </blockquote>
      <span className="mt-4 text-xs font-bold tracking-widest uppercase text-neutral-500">
        {author}
      </span>
      <a
        href="https://www.marieforleo.com/success-stories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-8 py-4 text-base font-bold tracking-wide text-center text-ramsha-accent bg-ramsha-tertiary rounded-full hover:bg-black/90 w-full md:w-[200px] lg:w-[300px]"
      >
        Get Inspired
      </a>
    </div>
  );
};

export default SuccessStory;
