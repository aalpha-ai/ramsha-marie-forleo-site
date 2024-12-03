'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { IntroSectionProps } from "./types";

export const IntroSection: React.FC<IntroSectionProps> = ({
  mainText,
  subTexts,
}) => {
  // Split texts into words for individual animation
  const mainWords = mainText.split(' ');
  const subWords = subTexts.split(' ');

  const wordAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <motion.div 
      className="relative bg-ramsha-primary px-4 py-16 md:px-8 w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Main content */}
      <div className="max-w-3xl mx-auto text-center font-body text-white w-full">
        {/* Main text with word-by-word animation */}
        <motion.div 
          className="leading-relaxed tracking-wider mb-8 flex flex-wrap justify-center gap-2 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
        >
          {mainWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnimation}
              whileHover={{ 
                scale: 1.05,
                color: "var(--ramsha-primary)",
                transition: { type: "spring", stiffness: 300 }
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Sub text with word-by-word animation */}
        <motion.div 
          className="leading-relaxed tracking-wider flex flex-wrap justify-center gap-2 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 1.2 }}
        >
          {subWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnimation}
              whileHover={{ 
                scale: 1.05,
                color: "var(--ramsha-primary)",
                transition: { type: "spring", stiffness: 300 }
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
