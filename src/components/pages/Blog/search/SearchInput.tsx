'use client';

import * as React from "react";
import { motion } from "framer-motion";
import { SearchInputProps } from "./types";

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full">
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        type="text"
        placeholder="Start typing..."
        className="w-full py-6 text-[32px] text-neutral-900 placeholder:text-neutral-400/60 focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-neutral-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
