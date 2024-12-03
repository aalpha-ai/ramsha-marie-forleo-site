'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { MilestoneCardProps } from "./types";

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col grow shrink justify-center pt-11 min-w-[240px] w-[226px]">
      <div className="flex flex-col pb-16 w-full items-center text-center">
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full aspect-[0.78]"
          initial={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="pb-px mt-6 font-extrabold leading-5 uppercase text-neutral-800 tracking-[2.16px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="pt-2 pb-2.5 mt-3.5 tracking-normal leading-8 max-w-[90%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {description}
        </motion.div>
      </div>
    </div>
  );
};
