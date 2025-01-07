/**
 * This code was generated by Builder.io
 */
'use client'

import * as React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/common/PrimaryButton";

export const OfferHero: React.FC = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white text-center px-4 md:px-16"
    >
      <section className="max-w-[900px] mx-auto py-20">
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-xl font-light leading-8 mb-16"
        >
          <p className="max-w-[800px] mx-auto">
            You{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="italic inline-block"
            >
              can
            </motion.span>{" "}
            have the business — and life — you dream of. 
            You can have the wealth, joy, and{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="uppercase tracking-wider inline-block"
            >
              FREEDOM
            </motion.span>{" "}
            you crave.
          </p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 max-w-[600px] mx-auto"
          >
            Most importantly, you can have a <span className="italic">damn good time</span> along the way.
          </motion.p>
        </motion.article>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-4xl font-header text-ramsha-tertiary uppercase tracking-[4px] leading-[54px] mb-8"
        >
          AND IT'S ALL INSIDE OF AWAKENED <br /> FEMININE...
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-sm tracking-[2px] uppercase mb-8"
        >
          THIS IS AN INVITE-ONLY EXPERIENCE — AVAILABILITY IS LIMITED.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <PrimaryButton text="GET ON THE VIP WAITLIST NOW" />
          </motion.div>
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-sm font-light"
        >
          <p className="flex gap-2 justify-center items-center">
            <span>Don't see the sign-up button?</span>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="text-[#E5B5A7] hover:text-white transition-colors duration-300"
            >
              Click here
            </motion.button>
            <span>to join.</span>
          </p>
        </motion.footer>
      </section>
    </motion.main>
  );
};
