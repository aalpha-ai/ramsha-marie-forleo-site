'use client'
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="uppercase flex justify-center items-center md:justify-start md:items-start gap-10 px-10 py-4 bg-[#FFF5F5] text-gray-600 text-xs lg:text-sm w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
      >
        © Glowing Femme
      </motion.div>

      <motion.a 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ color: "rgb(31, 41, 55)" }} // text-gray-800
        transition={{ 
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        href="/terms"
      >
        TERMS
      </motion.a>

      <motion.a 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ color: "rgb(31, 41, 55)" }} // text-gray-800
        transition={{ 
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        href="/privacy"
      >
        PRIVACY
      </motion.a>
    </footer>
  );
};

export default Footer; 