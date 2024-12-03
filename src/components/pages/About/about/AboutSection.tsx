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
      className="bg-ramsha-primary text-white flex flex-col w-full max-w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-4 px-4 md:px-14 pt-8 md:pt-12 pb-10 md:pb-14"
        variants={itemVariants}
      >
        <motion.div
          className="text-[30px] lg:text-4xl tracking-wider leading-tight md:leading-[62.4px] font-header"
          variants={itemVariants}
        >
          {title}
        </motion.div>
        {textBlocks.map((content, index) => (
          <motion.div 
            key={index} 
            className=""
            variants={itemVariants}
          >
            <TextBlock content={content} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
