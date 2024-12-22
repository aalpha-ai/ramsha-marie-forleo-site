'use client';

import * as React from "react";
import { motion } from "framer-motion";
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
      <div className="max-w-[1400px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[68px] border-t border-[#D4502B] pt-6 mb-16 text-center"
        >
          Sacred Collections
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <CollectionCard {...card} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C27C6F] text-white font-bold px-8 py-3 rounded-full hover:bg-[#b16a5d] transition-colors"
          >
            Explore All
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
