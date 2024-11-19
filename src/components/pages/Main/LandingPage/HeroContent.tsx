/**
 * This code was generated by Builder.io.
 */
'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroContent: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="flex flex-col max-md:ml-0 max-md:w-full lg:pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col text-neutral-800 max-md:mt-2.5 max-md:max-w-full">
        <motion.h2 
          variants={titleVariants}
          className="md:w-[180px] mt-4 text-[80px] md:text-[86px] lg:text-9xl font-caslon uppercase lg:tracking-wider lg:leading-[129.2px] lg:leading-14"
        >
          MEET RAMSHA
        </motion.h2>
        
        <motion.p 
          variants={textVariants}
          className="pb-px mt-5 text-lg tracking-normal leading-9 text-black lg:w-[512px] font-[500]"
        >
          Something tells me you&apos;re a generational trailblazer. 
          You&apos;ve decided that generational healing <motion.span 
            initial={{ textDecorationColor: "transparent" }}
            animate={{ textDecorationColor: "currentColor" }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="underline"
          >begins</motion.span> with you.
          A decade ago, I made the same choice. Now, I&apos;m an 
          award-winning therapist & self development coach
          with a mission: to help you relax your nervous system
          and honor your womanhood as you achieve massive
          success, with <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="italic"
          >pleasure</motion.span>. Let&apos;s show the world what it 
          means to be an empowered Muslim woman. We&apos;re
          here to let go & let God ease our missions for us as
          we take over the world.
        </motion.p>

        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button className="overflow-hidden pt-2.5 pb-3 mt-6 max-w-full text-base font-[700] tracking-wide leading-6 text-center text-white capitalize bg-ramsha-primary rounded-3xl lg:w-[300px] max-md:px-5 hover:bg-white hover:text-ramsha-primary transition-all duration-300">
            <a
              href="https://www.marieforleo.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tell Me More
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
