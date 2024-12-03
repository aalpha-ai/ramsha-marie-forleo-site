import * as React from "react";
import { MilestoneCard } from "./MilestoneCard";

const milestoneData = [
  {
    imageSrc: "...",
    imageAlt: "Sacred healing certification",
    title: "Somatic Healing",
    description: (
      <div className="text-black">
        Alhamdulillah, completed advanced
        <br />
        certification in somatic healing
        <br />
        and nervous system regulation
        <br />
        with renowned practitioners.
      </div>
    ),
  },
  {
    imageSrc: "...",
    imageAlt: "International retreat",
    title: "Global Impact",
    description: (
      <>
        <div className="text-black">
          Led transformative retreats for
          <br />
          Muslim women across Dubai,
          <br />
          Malaysia, and the UK, creating
          <br />
          spaces for deep healing and
          <br />
          spiritual connection.
        </div>
        <div className="flex flex-col py-0.5 pr-1.5 max-w-full font-bold text-orange-700 w-[246px]">
          <div className="self-center ml-4">MashAllah, over</div>
          <div className="mt-5">
            1,000 sisters transformed
            <br />
            through this work.
          </div>
        </div>
      </>
    ),
  },
  {
    imageSrc: "...",
    imageAlt: "Published work feature",
    title: "Sacred Wisdom",
    description: (
      <>
        <div className="text-black">
          Featured in Muslim wellness
          <br />
          publications for pioneering
          <br />
          work in Islamic{" "}
        </div>
        <div className="z-10 self-end -mt-4 mb-0 font-bold leading-8 text-orange-700 max-md:mr-2 max-md:mb-2.5">
          <a
            href="https://www.ramshahealing.com/embodiment"
            target="_blank"
            rel="noopener noreferrer"
          >
            somatic healing practices.
          </a>
        </div>
      </>
    ),
  },
];

export const MilestonesSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-14 pt-20 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pt-12 pb-6 max-w-full text-base tracking-normal leading-8 text-black w-[850px]">
          <div className="w-full text-4xl tracking-wider leading-[62.4px] text-neutral-800 max-md:max-w-full">
            I believe that true healing comes from honoring
            <br />
            both your spiritual essence and your physical
            <br />
            being.
          </div>
          <div className="pt-2 mt-8 w-full max-md:max-w-full">
            This includes embracing your divine feminine energy, your body's innate wisdom, and most importantly, your
            <br />
            connection with Allah. Whether you're seeking spiritual growth or emotional healing, understanding your
            <br />
            nervous system's role in transformation is essential for experiencing the deep peace and alignment you're meant for.
          </div>
          <div className="pt-2 mt-8 w-full max-md:max-w-full">
            SubhanAllah, every sister has the power to heal, transform, and embody her highest purpose through
            <br />
            faith-aligned practices and divine guidance.
          </div>
          <div className="pt-2 pb-2.5 mt-8 w-full max-md:max-w-full">
            By Allah's grace, this journey of combining spiritual wisdom with somatic healing has led to some
            <br />
            beautiful milestones. For instance:
          </div>
        </div>
        <div className="flex flex-wrap gap-9 justify-center self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {milestoneData.map((milestone, index) => (
            <MilestoneCard key={index} {...milestone} />
          ))}
        </div>
        <div className="flex flex-col pt-8 pb-8 mt-12 max-w-full text-4xl tracking-wider leading-[62.4px] text-neutral-800 w-[850px] max-md:mt-10">
          <div className="w-full max-md:max-w-full">
            Through these experiences and countless
            <br />
            divine appointments, I continue to witness
            <br />
            the miraculous ways Allah guides us toward
            <br />
            the highest purpose and the deepest peace.
          </div>
        </div>
      </div>
    </div>
  );
};
