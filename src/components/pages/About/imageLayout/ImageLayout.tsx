'use client'

import * as React from "react";
import { ResponsiveImage } from "./ResponsiveImage";
import { motion } from "framer-motion";

export const ImageLayout: React.FC = () => {
  return (
    <>
      <div className="bg-ramsha-primary flex relative justify-center items-start px-32 py-3 min-h-[576px] max-md:px-5">
        <ResponsiveImage
          src="/ramsha-pics/hero-2.webp"
          alt="Main content image"
          className="object-contain z-0 my-auto max-w-screen-md aspect-[1.39] min-w-[240px] w-[768px] max-md:max-w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-white font-logo text-[120px] leading-tight tracking-wider text-center max-md:text-[60px]">
            <div>RAMSHA</div>
            <div>SUHAIL</div>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ramsha-primary to-transparent"></div>
      </div>
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div 
          className="w-[55px]"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ResponsiveImage
            src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/3ef03a56279600e70aaaed5d3b92f4f3316716cd638385fece814bf7750d05ef?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
            alt="Scroll down indicator"
            className="object-contain w-full aspect-[0.57]"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ImageLayout;