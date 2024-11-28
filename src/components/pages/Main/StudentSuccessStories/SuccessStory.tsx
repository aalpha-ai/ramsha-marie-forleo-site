/**
 * This code was generated by Builder.io.
 */
'use client'
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SuccessStoryProps {
  category: string;
  testimonial: string;
  author: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  category,
  testimonial,
  author,
}) => {
  return (
    <div className="flex flex-col px-5 md:px-12 pb-20 md:pb-8 pt-8 md:pt-10 lg:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="inline-flex px-4 py-2 text-xs tracking-[2.24px] uppercase bg-white rounded-full h-[32px] items-center justify-center w-fit whitespace-nowrap"
      >
        {category}
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true }}
        className="mt-6 text-[20px] md:text-[16px] leading-[1.6] tracking-normal text-black"
      >
        {testimonial}
      </motion.blockquote>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 0.3
        }}
        viewport={{ once: true }}
        className="mt-4 text-xs font-subheader tracking-widest uppercase text-neutral-500"
      >
        {author}
      </motion.span>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          duration: 0.5,
          delay: 0.4
        }}
        viewport={{ once: true }}
        href="https://www.marieforleo.com/success-stories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-8 py-4 text-base font-subheader tracking-wide text-center text-white bg-ramsha-tertiary rounded-full hover:bg-black/90 w-full md:w-[200px] lg:w-[300px]"
      >
        Get Inspired
      </motion.a>
    </div>
  );
};

export default SuccessStory;
