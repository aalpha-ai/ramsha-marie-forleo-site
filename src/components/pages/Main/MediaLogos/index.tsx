/**
 * This code was generated by Builder.io.
 */
import React from "react";
import MediaLogo from "./MediaLogo";
import BlurFade from "@/components/magicui/blur-fade";

type MediaLogoData = {
  src: string;
  alt: string;
  className: string;
};

const mediaLogos: MediaLogoData[] = [
  {
    src: "/goop.svg",
    alt: "Media Logo 1",
    className: "aspect-[3.88] w-[89px]",
  },
  {
    src: "/oprah.svg",
    alt: "Media Logo 2",
    className: "aspect-[1.33] w-[89px]",
  },
  {
    src: "/bazaar.svg",
    alt: "Media Logo 3",
    className: "aspect-[2.54] w-[89px]",
  },
  {
    src: "/bbc.svg",
    alt: "Media Logo 4",
    className: "aspect-[1.33] w-[89px]",
  },
  {
    src: "/parade.svg",
    alt: "Media Logo 5",
    className: "aspect-[1.96] w-[88px]",
  },
  {
    src: "/success-magazine.svg",
    alt: "Media Logo 6",
    className: "aspect-[4.24] w-[89px]",
  },
];

const MediaLogos: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-6 px-20 pt-10 md:pb-14 lg:pt-20 lg:pb-32 bg-[#994A25] w-full max-md:px-5 max-md:pb-24">
      <BlurFade>
        <h2 className="pb-px w-full text-xs font-extrabold leading-5 text-center text-white uppercase  tracking-[2.16px] max-md:max-w-full">
          You Might Have Seen Me On
        </h2>
      </BlurFade>
      <BlurFade>
        <div className="flex flex-wrap md:flex-row gap-x-6 lg:gap-x-12 justify-center">
          {mediaLogos.map((logo, index) => (
            <MediaLogo key={index} {...logo} />
          ))}
        </div>
      </BlurFade>
    </section>
  );
};

export default MediaLogos;
