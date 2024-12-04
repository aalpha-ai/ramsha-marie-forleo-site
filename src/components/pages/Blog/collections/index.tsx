import * as React from "react";
import { CollectionCard } from "./CollectionCard";
import { CollectionCardProps } from "./types";

const allCards: CollectionCardProps[] = [
  {
    title: "Strengthen Your Mind and Soul",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Use Your Voice, Share Your Gifts",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Inspiring Interviews",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Be a Force for Good",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Smart Advice for Sticky Situations",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Focus and Be More Productive",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Build a Meaningful Business",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Grow Your Wealth",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  }
];

export const Collections: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-14">
      {/* Header with border */}
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[68px] font-display border-t border-neutral-900 pt-6 mb-16">
          Collections
        </h1>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allCards.map((card, index) => (
            <CollectionCard key={index} {...card} />
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 rounded-full border border-neutral-200 hover:border-neutral-400 transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};
