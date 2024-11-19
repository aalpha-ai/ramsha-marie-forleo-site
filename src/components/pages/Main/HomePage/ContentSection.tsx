/**
 * This code was generated by Builder.io.
 */
'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ContentSectionProps = {
  title: any;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  textContainerClassName?: string;
  imageContainerClassName?: string;
  backgroundColor?: string;
};

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  textContainerClassName = "col-span-6",
  imageContainerClassName = "col-span-6",
  backgroundColor,
}) => {
  return (
    <section 
      className="flex flex-col items-center w-full py-11 px-5 lg:py-24 lg:px-7"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col w-full max-w-5xl.5">
        <div className="flex flex-col md:flex-row w-full md:items-center md:gap-8">
          <div
            className={`flex flex-col ${textContainerClassName} text-neutral-800 md:w-1/2 w-full order-2 md:order-1`}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="z-10 pb-px text-xs font-[700] leading-5 uppercase tracking-[2.16px]"
            >
              {subtitle}
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-[32px] md:text-[42px] lg:text-[40px] leading-[1.3] md:leading-[1.2] font-caslon font-[700]"
            >
              {title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pb-px mt-5 text-lg tracking-normal leading-[1.6] md:leading-8 text-black font-[600]"
            >
              {description}
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              href={buttonLink}
              className="overflow-hidden z-10 px-6 md:px-16 py-4 md:py-4 mt-6 text-base font-bold tracking-wide leading-6 text-center text-white capitalize rounded-full bg-ramsha-tertiary w-full md:w-fit shadow-button hover:shadow-button-hover font-[700]"
            >
              {buttonText}
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${imageContainerClassName} md:w-1/2 w-full flex justify-center md:justify-end items-start order-1 md:order-2 mb-8 md:mb-0`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="object-contain w-full max-w-[335px] md:max-w-none md:w-full"
              width={335}
              height={140}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
