/**
 * This code was generated by Builder.io.
 */
'use client'

import React from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/common/SecondaryButton";

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full lg:pt-20">
      <div className="flex flex-col text-neutral-800 max-md:mt-2.5 max-md:max-w-full">
        <motion.h2 
          initial={{ 
            opacity: 0, 
            x: -50,
            scale: 0.95
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
          className="md:w-[180px] mt-4 text-[80px] md:text-[86px] lg:text-9xl font-header uppercase lg:tracking-wider lg:leading-[129.2px] lg:leading-14"
        >
          MEET RAMSHA
        </motion.h2>
        
        <motion.p 
          initial={{ 
            opacity: 0,
            y: 30
          }}
          whileInView={{ 
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="pb-px mt-5 text-lg tracking-normal leading-9 text-black lg:w-[512px]"
        >
          Something tells me you&apos;re a generational trailblazer. 
          You&apos;ve decided that generational healing <motion.span 
            initial={{ textDecorationColor: "transparent" }}
            whileInView={{ textDecorationColor: "currentColor" }}
            transition={{ delay: 0.8, duration: 0.3 }}
            viewport={{ once: true }}
            className="underline"
          >begins</motion.span> with you.
          A decade ago, I made the same choice. Now, I&apos;m an 
          award-winning therapist & self development coach
          with a mission: to help you relax your nervous system
          and honor your womanhood as you achieve massive
          success, with <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
            className="italic"
          >pleasure</motion.span>. Let&apos;s show the world what it 
          means to be an empowered Muslim woman. We&apos;re
          here to let go & let God ease our missions for us as
          we take over the world.
        </motion.p>

        <div className="mt-6">
          <SecondaryButton href="/awakened-feminine" text="Tell Me More" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
