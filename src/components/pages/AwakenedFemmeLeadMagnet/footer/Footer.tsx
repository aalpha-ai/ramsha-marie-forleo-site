/**
 * This code was generated by Builder.io
 */
'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { FooterLink } from "./FooterLinks";

const links = [
  { href: "/terms", text: "TERMS" },
  { href: "/privacy", text: "PRIVACY" },
];

export const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex justify-between items-center px-8 py-4 bg-black text-white w-full"
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center"
      >
        <motion.h2 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-lg font-bold tracking-wider uppercase"
        >
          Awakened Feminine
        </motion.h2>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-6"
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4 + (index * 0.1),
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-xs tracking-wider hover:text-gray-300 transition-colors"
          >
            <FooterLink 
              href={link.href}
            >
              {link.text}
            </FooterLink>
          </motion.div>
        ))}
      </motion.nav>
    </motion.footer>
  );
};
