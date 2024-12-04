/**
 * This code was generated by Builder.io
 */
import React from "react";
import Heading from "./Heading";
import JoinWaitlist from "./JoinWaitlist";
import BlurFade from "@/components/magicui/blur-fade";

interface ContentItem {
  text: string;
  alignment: "left" | "right" | "center";
}

const contentItems: ContentItem[] = [
  { text: "Divine\nAwakening", alignment: "left" },
  { text: "Spiritual\nAbundance", alignment: "right" },
  { text: "Sacred\nEmbodiment", alignment: "left" },
];

const ContinuousEvolution: React.FC = () => {
  return (
    <section 
      className="flex flex-col items-center bg-black relative"
      style={{
        backgroundImage: "url('/ramsha-pics/webp/glowingfemmej3.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="flex flex-col px-10 pt-14 pb-5 w-full max-md:px-5 max-md:max-w-full relative z-10">
        {contentItems.map((item, index) => (
          <BlurFade key={index}>
            <Heading
              text={item.text}
              alignment={item.alignment}
              className={index > 0 ? "mt-96 max-md:mt-10" : ""}
            />
          </BlurFade>
        ))}
        <BlurFade>
          <div className="flex flex-wrap gap-5 justify-center mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col grow shrink pt-3 pb-4 text-2xl font-light tracking-wide leading-8 text-orange-50 min-w-[240px] w-[246px]">
              <h4 className="pr-1 w-full font-header">
                <span className="">
                  Guiding you to embrace your
                </span>
                <br />
                <span className="font-bold text-orange-50">
                  divine feminine power
                </span>
                <span className="text-orange-50">, bi'ithnillah.</span>
              </h4>
            </div>
            <div className="flex flex-col grow shrink justify-center items-end pt-11 pb-12 w-full max-w-[388px]">
              <div className="flex max-w-full bg-white min-h-[1px] w-[388px]" />
            </div>
            <JoinWaitlist />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContinuousEvolution;
