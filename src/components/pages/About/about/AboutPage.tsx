'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { AboutSection } from "./AboutSection";

export const AboutPage: React.FC = () => {
  const aboutData = {
    title: "And now, my beloved\nsister...",
    textBlocks: [
      [
        "Bismillah. I'm here as your guide and sister in faith.",
        "This sacred container is built on divine love,",
        "embodied wisdom, and a deep commitment to serve",
        "Allah and His creation through healing work.",
      ],
      [
        "Through our healing circles, somatic practices,",
        "and spiritual guidance — we're here to help you",
        "reconnect with your body's wisdom and your soul's",
        "purpose. To help you create a life of deep peace",
        "and alignment with your divine nature, bi'ithnillah.",
      ],
      [
        "Whether you're seeking to heal trauma, deepen your",
        "spiritual connection, or embody your feminine power,",
        "we're here to support your journey through gentle",
        "somatic practices that honor both your faith and",
        "your nervous system's natural capacity to heal.",
      ],
    ],
  };

  // Animation variants
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

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div 
      className="bg-ramsha-primary flex justify-center items-center px-12 pt-12 max-md:px-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <motion.div 
          className="flex flex-col justify-center items-center px-2.5 pb-12 w-96 min-h-[1px] min-w-[240px]"
          variants={imageVariants}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl w-[364px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.img
              loading="lazy"
              src="/ramsha-pics/gf77.jpeg"
              alt="Sacred healing journey illustration"
              className="object-contain max-w-full aspect-[0.54] w-[364px] rounded-2xl"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            />
            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3
          }}
        >
          <AboutSection
            title={aboutData.title}
            textBlocks={aboutData.textBlocks}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
