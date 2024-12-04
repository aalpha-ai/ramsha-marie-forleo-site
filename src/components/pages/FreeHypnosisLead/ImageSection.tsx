'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageSection: React.FC = () => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 40,
        scale: 0.95
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }}
      viewport={{ once: true }}
      className="w-full xl:w-[500px] lg:w-[400px] flex justify-center items-center"
    >
      <Image
        src="/ramsha-pics/webp/cta-image-2.webp"
        className="object-contain w-full max-w-[500px]"
        alt="Learn Anything illustration"
        width={500}
        height={250}
        priority
      />
    </motion.div>
  );
};

export default ImageSection;
