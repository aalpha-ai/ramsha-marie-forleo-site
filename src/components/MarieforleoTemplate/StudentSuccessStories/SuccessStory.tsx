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
    <div className="flex  inset-y-0 right-0 z-0 flex-col self-start px-12 pt-16 pb-48 bg-stone-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <span className="self-start p-2 text-xs font-medium leading-3 text-orange-700 uppercase whitespace-nowrap bg-white rounded-md tracking-[2.24px] font-gotham">
        {category}
      </span>
      <blockquote className="pb-px mt-5 text-lg tracking-normal leading-9 text-black max-md:max-w-full">
        {testimonial}
      </blockquote>
      <cite className="pb-px mt-2 text-xs font-extrabold tracking-widest leading-4 uppercase text-neutral-500 max-md:max-w-full">
        {author}
      </cite>
      <Button
        variant="default"
        className="px-24 pt-2.5 pb-3 mt-5 max-w-full text-base font-bold tracking-wide leading-6 text-center text-white capitalize rounded-3xl bg-neutral-800 w-full md:w-[300px] max-md:px-5 shadow-none hover:shadow-none hover:bg-black/90 font-area-normal"
      >
        <a
          href="https://www.marieforleo.com/success-stories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Inspired
        </a>
      </Button>
    </div>
  );
};

export default SuccessStory;
