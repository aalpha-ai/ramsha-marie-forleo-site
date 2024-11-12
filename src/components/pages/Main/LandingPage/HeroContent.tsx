/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Button } from "@/components/ui/button";

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full pt-20">
      <div className="flex flex-col text-neutral-800 max-md:mt-2.5 max-md:max-w-full">
        <h2 className="mt-4 text-9xl font-ivy-presto tracking-wider uppercase max-w-md leading-[129.2px] max-md:max-w-full max-md:text-8xl max-md:leading-14">
          MEET RAMSHA
        </h2>
        <p className="pb-px mt-5 text-lg tracking-normal leading-9 text-black w-[512px] font-[500]">
          Something tells me you&apos;re a generational trailblazer. 
          You&apos;ve decided that generational healing <span className="underline">begins</span> with you.
          A decade ago, I made the same choice. Now, I&apos;m an 
          award-winning therapist & self development coach
          with a mission: to help you relax your nervous system
          and honor your womanhood as you achieve massive
          success, with <span className="italic">pleasure</span>. Let&apos;s show the world what it 
          means to be an empowered Muslim woman. We&apos;re
          here to let go & let God ease our missions for us as
          we take over the world.
        </p>
        <Button className="overflow-hidden pt-2.5 pb-3 mt-6 max-w-full text-base font-bold tracking-wide leading-6 text-center text-white capitalize bg-[#082F2E] rounded-3xl  w-[300px] max-md:px-5 hover:bg-white">
          <a
            href="https://www.marieforleo.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tell Me More
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
