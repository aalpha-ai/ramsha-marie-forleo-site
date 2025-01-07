'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { TextBlock } from "./TextBlock";
import Link from 'next/link';
import PrimaryButton from "@/components/common/PrimaryButton";

export const DreamClub: React.FC = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-neutral-900 text-white text-center px-4 md:px-16"
    >
      <section className="max-w-[900px] mx-auto py-12">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <TextBlock 
            text="Ramsha Suhail Invites You" 
            className="text-xs uppercase tracking-[2.16px] text-ramsha-tertiary"
          />
        </motion.header>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-header text-4xl md:text-7xl leading-tight md:leading-[100px] mb-8"
        >
          Join the VIP Waitlist <br /> for Awakened Feminine!
        </motion.h1>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg font-light leading-8 mb-8"
        >
          <div className="mb-4">
            <TextBlock text="Awakened Feminine isn't just another business program. It's a" />
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <TextBlock text="lifestyle revolution" isBold={true} />
            </motion.span>
            <TextBlock text="for ambitious, wildly magical creators committed to doing business and life differently…" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <TextBlock
              text="SPACES ARE LIMITED & THEY FILL UP FAST."
              className="mb-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <TextBlock
              text="Join the VIP Waitlist now to get first dibs..."
              className="italic"
            />
          </motion.div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <PrimaryButton text="GET ON THE VIP WAITLIST NOW" />
            </motion.div>
          </Link>
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm"
        >
          <div className="flex justify-center items-center gap-1">
            <TextBlock text="Don't see the sign-up button?" />
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Link href="/">
                <TextBlock 
                  text="Click here" 
                  className="text-[#E5B5A7] hover:text-white transition-colors duration-300 cursor-pointer" 
                />
              </Link>
            </motion.span>
            <TextBlock text="to join." />
          </div>
        </motion.footer>
      </section>
    </motion.main>
  );
};
