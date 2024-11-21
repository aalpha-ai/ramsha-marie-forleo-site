/**
 * This code was generated by Builder.io
 */
'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { FooterLink } from "./FooterLinks";
import Link from 'next/link';

const links = [
  { href: "/terms-of-use", text: "TERMS OF USE" },
  { href: "/privacy-policy", text: "PRIVACY POLICY" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex justify-between items-center px-8 py-4 bg-[#0A0A0A] text-white/80 w-full text-xs"
    >
      {/* Left Links */}
      <motion.nav 
        initial={{ opacity: 0, x: -20 }}
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
            className="tracking-wider hover:text-white transition-colors"
          >
            <FooterLink href={link.href}>
              {link.text}
            </FooterLink>
          </motion.div>
        ))}
      </motion.nav>

      {/* Center Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        © {currentYear} GLOWING FEMME ALL RIGHTS RESERVED.
      </motion.div>

      {/* Right Credits */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        <span>WEBSITE BY</span>
        <Link 
          href="https://lumina.studio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#FF4D00] hover:text-[#FF6B2C] transition-colors"
        >
          AALPHA.AI
        </Link>
      </motion.div>
    </motion.footer>
  );
};
