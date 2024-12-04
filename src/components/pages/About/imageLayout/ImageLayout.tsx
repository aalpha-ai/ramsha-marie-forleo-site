'use client'

import * as React from "react";
import { ResponsiveImage } from "./ResponsiveImage";
import { motion, AnimatePresence } from "framer-motion";

export const ImageLayout: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="bg-ramsha-primary flex relative justify-center items-start px-4 md:px-8 lg:px-32 py-3 lg:min-h-[576px] max-md:px-5"
      >
        {/* Main Image with fade-in and contract */}
        <div className="overflow-hidden w-full flex justify-center">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
            className="w-full max-w-[768px]"
          >
            <ResponsiveImage
              src="/ramsha-pics/webp/hero-2.webp"
              alt="Main content image"
              className="object-contain z-0 my-auto w-full aspect-[1.39]"
            />
          </motion.div>
        </div>

        {/* Name overlay with letter animation */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-white font-header text-[120px] leading-tight tracking-wider text-center max-md:text-[60px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* Animate each letter of RAMSHA */}
              <div className="flex justify-center">
                {"RAMSHA".split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "var(--ramsha-accent)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* Animate each letter of SUHAIL */}
              <div className="flex justify-center">
                {"SUHAIL".split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.3 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "var(--ramsha-accent)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </h1>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ramsha-primary to-transparent"></div>
      </motion.div>

      {/* Scroll down indicator */}
      {/* <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50">
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
      </div> */}
    </AnimatePresence>
  );
};

export default ImageLayout;