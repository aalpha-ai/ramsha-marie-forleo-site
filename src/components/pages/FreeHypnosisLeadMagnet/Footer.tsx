'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="uppercase flex justify-between items-center px-10 py-4 bg-ramsha-primary font-[400] text-ramsha-accent text-xs lg:text-sm w-full">
      {/* Left Links */}
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
          href="/terms"
          className="tracking-wider"
        >
          TERMS & CONDITIONS
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
          href="/privacy"
          className="tracking-wider"
        >
          PRIVACY POLICY
        </motion.a>
      </div>

      {/* Center Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        © {currentYear} GLOWING FEMME ALL RIGHTS RESERVED.
      </motion.div>

      {/* Right Credits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 0.3,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        <span>WEBSITE BY</span>
        <Link 
          href="https://aalpha.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors"
        >
          AALPHA.AI
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer; 