import * as React from "react";
import { CollectionCard } from "./CollectionCard";
import { CollectionCardProps } from "./types";

const allCards: CollectionCardProps[] = [
  {
    title: "Awaken Your Inner Goddess",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Express Your Divine Gifts",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Empowering Conversations",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Be a Beacon of Light",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Wisdom for Life's Challenges",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Cultivate Focus and Flow",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Create a Soulful Business",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  },
  {
    title: "Manifest Abundant Wealth",
    image: "/ramsha-pics/webp/glowingfemmej3.webp"
  }
];

export const Collections: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-14 bg-[#FFF5F5]">
      {/* Header with border */}
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[68px] font-display border-t border-[#D4502B] pt-6 mb-16 text-center">
          Sacred Collections
        </h1>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allCards.map((card, index) => (
            <CollectionCard key={index} {...card} />
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center">
          <button className="bg-[#C27C6F] text-white font-bold px-8 py-3 rounded-full hover:bg-[#b16a5d] transition-colors">
            Explore All
          </button>
        </div>
      </div>
    </section>
  );
};
