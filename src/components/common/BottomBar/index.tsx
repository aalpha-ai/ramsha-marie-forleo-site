'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const BottomBar: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tracking-widest uppercase flex flex-col md:flex-row md:justify-between items-center px-10 py-8 md:py-4 bg-ramsha-primary text-white text-[12px] md:text-[9px] lg:text-[10px] xl:text-[12px] w-full space-y-6 md:space-y-0">
      {/* Links - Top on mobile, Left on desktop */}
      <div className="flex items-center gap-6">
        <motion.a 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ color: "rgb(31, 41, 55)" }}
          transition={{ 
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          href="/terms-of-use"
        >
          TERMS OF USE
        </motion.a>

        <motion.a 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ color: "rgb(31, 41, 55)" }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          href="/privacy-policy"
        >
          PRIVACY POLICY
        </motion.a>
      </div>

      {/* Copyright - Middle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="md:flex-1 text-center whitespace-nowrap"
      >
        © {currentYear} GLOWING FEMME ALL RIGHTS RESERVED
      </motion.div>

      {/* Credits - Bottom on mobile, Right on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 0.3,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-[17px] md:text-[9px] lg:text-[10px] xl:text-[12px]"
      >
        <span>WEBSITE BY</span>
        <Link 
          href="https://aalpha.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors font-extrabold text-ramsha-tertiary"
        >
          AALPHA.AI
        </Link>
      </motion.div>
    </footer>
  );
};

export default BottomBar; 