'use client';

import * as React from "react";
import { motion } from "framer-motion";
import { ContentItem } from "./ContentItem";
import Link from "next/link";

const contentData = [
  {
    imageUrl: "/ramsha-pics/webp/gf33.webp",
    title: "Embrace Your Divine Path: Uncovering True Success with Yasmin Mogahed",
    date: "OCTOBER 29, 2024",
    href: "#"
  },
  {
    imageUrl: "/ramsha-pics/webp/gf33.webp",
    title: "Stand Out with Grace: Navigating the Market with Halima Aden",
    date: "OCTOBER 8, 2024",
    href: "#"
  },
  {
    imageUrl: "/ramsha-pics/webp/gf33.webp",
    title: "Finding Meaning and Joy: A Journey with Amani Al-Khatahtbeh",
    date: "OCTOBER 1, 2024",
    href: "#"
  },
];

export const LatestContent: React.FC = () => {
  return (
    <section className="bg-[#FFF5F5] py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-11"
        >
          <motion.span 
            className="text-xs font-bold tracking-[2.16px] uppercase text-[#D4502B]"
          >
            Discover the Latest Insights in...
          </motion.span>
        </motion.div>

        {/* Title and View All */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 border-t border-[#D4502B] pt-4 pb-8 sm:pb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-[68px] leading-tight sm:leading-none text-[#D4502B] break-words"
          >
            Spiritual Growth & Empowerment
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="shrink-0"
          >
            <Link 
              href="#" 
              className="text-xs font-bold tracking-[2.4px] uppercase hover:opacity-70 transition-opacity flex items-center gap-2 text-[#D4502B] whitespace-nowrap"
            >
              <motion.span
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                EXPLORE ALL
              </motion.span>
              <motion.span 
                className="text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <ContentItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
