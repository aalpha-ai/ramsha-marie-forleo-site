'use client';

import * as React from "react";
import { motion } from "framer-motion";
import { SearchInput } from "./SearchInput";
import { ArticleCard } from "./ArticleCard";
import { articles } from "./data";

export const SearchPage: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log("Searching:", value);
  };

  return (
    <div className="w-full container mx-auto px-6 md:px-14 py-20 bg-white">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-header text-[48px] leading-[1.05] tracking-[-0.02em] text-neutral-900 mb-6"
        >
          What Divine Wisdom Are You Seeking?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#D4502B] text-lg mb-14 font-light"
        >
          Explore our sacred collection of spiritual teachings and feminine wisdom
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative max-w-2xl mx-auto"
        >
          <SearchInput onSearch={handleSearch} />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C27C6F] origin-left"
          />
        </motion.div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* No Results Message - Optional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16 hidden"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl mb-4"
        >
          Your Journey Leads Elsewhere
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-neutral-600 mb-8"
        >
          We couldn't find what you're looking for, but perhaps that's Allah's way
        </motion.p>
      </motion.div>
    </div>
  );
};
