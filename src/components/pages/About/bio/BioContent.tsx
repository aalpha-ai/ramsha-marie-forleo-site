import * as React from "react";
import { TextBlock } from "./components/TextBlock";
import { LinkText } from "./components/LinkText";
import { BioSection } from "./components/BioSection";

export const BioContent: React.FC = () => {
  const bioSections = [
    {
      text: "Feeling disconnected from your body and spirit? I'll guide you through",
      link: {
        href: "https://www.ramshahealing.com/somatic-healing",
        text: "somatic healing",
      },
      additionalText: " to restore your divine connection.",
    },
    {
      text: "Struggling to find peace and balance in your life? Discover your",
      link: {
        href: "https://www.ramshahealing.com/spiritual-guidance",
        text: "inner harmony",
      },
      additionalText: " through faith-aligned practices.",
    },
    {
      text: "Seeking to embrace your feminine essence while honoring your deen? I'll show you the",
      link: {
        href: "https://www.ramshahealing.com/feminine-embodiment",
        text: "path",
      },
      additionalText: " to authentic embodiment.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-20 pt-20 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-9 w-full max-w-[850px] max-md:max-w-full">
          <TextBlock content="Born with a passion for healing and a heart for service, I'm honored to guide Muslim women on their journey to spiritual and somatic transformation." />

          <div className="flex flex-wrap gap-3 mt-4 w-full text-base tracking-normal max-w-[810px] max-md:max-w-full">
            <div className="grow self-start leading-8 text-black">
              Through our transformative programs{" "}
            </div>
            <div className="flex gap-1">
              <LinkText
                href="https://www.ramshahealing.com/programs"
                text="Awakened Feminine"
              />
              <div className="self-start leading-8 text-black">and </div>
            </div>
            <div className="flex gap-1 font-bold max-md:max-w-full">
              <LinkText
                href="https://www.ramshahealing.com/community"
                text="Sacred Sisterhood,"
              />
              <div className="self-start leading-8 text-black basis-auto">
                we create spaces for healing and growth.
              </div>
            </div>
          </div>

          <div className="flex overflow-hidden flex-col pb-3 pl-9 mt-4 text-base tracking-normal leading-8 max-md:pl-5 max-md:max-w-full">
            {bioSections.map((section, index) => (
              <BioSection
                key={index}
                text={section.text}
                link={section.link}
                additionalText={section.additionalText}
              />
            ))}
          </div>

          <div className="mt-0 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                <div className="self-stretch my-auto mr-0 text-5xl tracking-wider leading-[62.4px] text-neutral-800 max-md:mt-10 max-md:max-w-full">
                  "Your Body is a Sacred Vessel."
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center">
                  <img
                    loading="lazy"
                    src="..." // update with Ramsha's portrait
                    alt="Ramsha portrait"
                    className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[0.83] basis-0 max-w-[850px] min-w-[240px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <TextBlock
            content="Meaning, your body holds the wisdom and power to heal, transform, and thrive — when you align with your true essence and divine purpose."
            className="mt-4"
          />

          <div className="flex flex-wrap gap-6 mt-4 w-full text-base tracking-normal max-w-[792px] max-md:max-w-full">
            <div className="flex-auto self-start leading-8 text-black">
              "Your Body is a Sacred Vessel" is not only a guiding principle of my{" "}
            </div>
            <div className="flex flex-auto gap-0.5">
              <LinkText
                href="https://www.ramshahealing.com/philosophy"
                text="healing philosophy"
              />
              <div className="self-start leading-8 text-black">. It's the</div>
            </div>
          </div>

          <TextBlock
            content="foundation of a life filled with peace, purpose, and divine alignment."
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};
