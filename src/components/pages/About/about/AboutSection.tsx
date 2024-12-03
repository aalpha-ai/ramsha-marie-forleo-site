import * as React from "react";
import { motion } from "framer-motion";
import { TextBlock } from "./TextBlock";
import { AboutSectionProps } from "./types";

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  textBlocks,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="bg-ramsha-primary text-white flex flex-col px-2.5 text-base tracking-normal leading-8 min-h-[1px] min-w-[240px] w-[538px] max-md:max-w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-4 px-14 pt-12 pb-14 w-full max-md:px-5 max-md:max-w-full"
        variants={itemVariants}
      >
        <motion.div
          className="w-full text-5xl tracking-wider leading-[62.4px] font-logo"
          variants={itemVariants}
        >
          {title}
        </motion.div>
        {textBlocks.map((content, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TextBlock content={content} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
