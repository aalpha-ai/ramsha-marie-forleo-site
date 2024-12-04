import * as React from "react";
import { CollectionSection } from "./CollectionSection";
import { CollectionCardProps } from "./types";

const topRowCards: CollectionCardProps[] = [
  {
    title: ["Strengthen", "Your Mind", "and Soul"],
    paddingTop: "pt-64",
  },
  {
    title: ["Use Your", "Voice,", "Share Your", "Gifts"],
    paddingTop: "pt-64",
  },
  {
    title: ["Inspiring", "Interviews"],
    paddingTop: "pt-72",
  },
  {
    title: ["Be a Force", "for Good"],
    paddingTop: "pt-72",
  },
];

const bottomRowCards: CollectionCardProps[] = [
  {
    title: ["Smart", "Advice for", "Sticky", "Situations"],
    paddingTop: "pt-64",
  },
  {
    title: ["Focus and", "Be More", "Productive"],
    paddingTop: "pt-64",
  },
  {
    title: ["Build a", "Meaningful", "Business"],
    paddingTop: "pt-64",
  },
  {
    title: ["Grow Your", "Wealth"],
    paddingTop: "pt-72",
  },
];

export const Collections: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-stone-50">
      <div className="flex flex-col px-11 py-24 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center self-center pt-4 pb-0.5 w-full text-5xl tracking-wider leading-none whitespace-nowrap border-t border-solid border-t-black max-w-[905px] text-neutral-800 max-md:max-w-full">
          <div className="max-md:max-w-full">Collections</div>
        </div>
        <div className="mt-9 max-md:max-w-full">
          <CollectionSection cards={topRowCards} />
        </div>
        <div className="max-md:max-w-full">
          <CollectionSection cards={bottomRowCards} />
        </div>
        <div className="flex justify-center items-center self-center px-96 mt-7 text-base font-bold tracking-wide leading-relaxed text-center text-black capitalize max-md:px-5 max-md:max-w-full">
          <button className="overflow-hidden self-stretch px-6 pt-2.5 pb-3 my-auto rounded-3xl bg-white bg-opacity-0 max-md:px-5">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};
