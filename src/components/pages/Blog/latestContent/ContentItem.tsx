'use client';

import * as React from "react";
import { motion } from "framer-motion";
import { ContentItemProps } from "./types";

export const ContentItem: React.FC<ContentItemProps> = ({
  imageUrl,
  title,
  date,
  href,
}) => {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col max-w-[400px] gap-4">
        <motion.div 
          className="w-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            src={imageUrl}
            alt="Content thumbnail"
            className="w-full aspect-video object-cover"
          />
        </motion.div>
        <motion.div 
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.h3 
            className="text-[26px] leading-tight font-serif text-neutral-800"
            whileHover={{ color: "#D4502B" }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-xs tracking-[0.15em] uppercase text-neutral-500 font-medium"
          >
            {date}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
