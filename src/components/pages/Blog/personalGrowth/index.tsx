'use client';

import * as React from "react";
import { motion } from "framer-motion";

export const PersonalGrowthArticle: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start px-6 md:px-14 py-16 w-full max-w-[1400px] gap-8 md:gap-16"
      >
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-[60%] lg:w-[55%]">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase"
          >
            Spiritual Growth
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.2] mt-4 mb-6 text-neutral-800"
          >
            Embracing Divine Feminine Energy: Your Path to Spiritual Abundance
          </motion.h1>
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs tracking-widest uppercase text-neutral-500"
          >
            October 29, 2024
          </motion.span>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-6 mt-4 mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.svg 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L17 21H7L12 15Z" fill="currentColor"/>
              </motion.svg>
              <span className="text-xs tracking-widest uppercase">Meditation</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.svg 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
              </motion.svg>
              <span className="text-xs tracking-widest uppercase">Healing</span>
            </motion.div>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6, 
              duration: 0.5,
              type: "spring",
              stiffness: 500
            }}
            className="bg-[#E7D7D7] text-black font-bold py-3 px-12 rounded-full w-fit hover:bg-[#d8c3c3] transition-colors relative overflow-hidden group"
          >
            <motion.span 
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Begin Your Journey
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-[#d8c3c3] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
              whileHover={{ 
                scale: 1.5,
                opacity: 1
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full md:w-[40%] lg:w-[45%] self-stretch"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src="/ramsha-pics/webp/glowingfemmej3.webp"
            alt="Peaceful meditation session for spiritual growth"
            className="w-full h-full object-cover rounded-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-4 right-4 bg-[#2C3338] text-white text-xs px-3 py-1 rounded"
          >
            Featured
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
