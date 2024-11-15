/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { LearnHeader } from "./LearnHeader";
import { LearnImage } from "./LearnImage";
import BlurFade from "@/components/magicui/blur-fade";

const LearnAnything: React.FC = () => {
  return (
    <main className="bg-stone-50 md:px-10 lg:px-0">
        <section className="flex flex-col md:flex-row py-20 lg:max-w-[1000px] mx-auto max-md:px-5">
          <BlurFade inViewMargin="-200px">
            <div className="w-full md:w-1/2">
              <LearnHeader />
            </div>
          </BlurFade>
          <BlurFade inViewMargin="-200px">
            <div className="w-full md:w-1/2 flex justify-end items-center">
              <LearnImage />
            </div>
          </BlurFade>
        </section>
    </main>
  );
};

export default LearnAnything;
