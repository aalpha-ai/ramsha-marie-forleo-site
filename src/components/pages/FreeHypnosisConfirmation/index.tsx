import React from "react";
import Success from "./Success";
import BottomBar from "@/components/common/BottomBar";
import { motion } from "framer-motion";
import { Sparkles, Home, Stars } from 'lucide-react';
import Link from 'next/link';

export default function Component() {
  return (
    <section className="font-montserrat">
      <section className="flex flex-col items-center bg-ramsha-accent border-ramsha-accent m-4 md:m-10 border-[10px] xl:px-[10px] xl:pt-[56px] xl:pb-[54px] px-[0px] pt-[45px] pb-[55px] rounded-[30px]">
        <div className="flex flex-col items-center text-center px-8 pt-16 relative overflow-hidden">
          {/* Floating stars background effect */}
          {/* <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <Stars className="w-full h-full text-ramsha-tertiary" />
          </motion.div> */}

          {/* Amazing Choice text with sparkle effect */}
          <motion.p 
            className="font-montserrat-bold text-ramsha-tertiary tracking-wider pb-8 text-2xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <motion.span
              className="absolute -left-6 top-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span> */}
            AMAZING CHOICE!
            {/* <motion.span
              className="absolute -right-6 top-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -360, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span> */}
          </motion.p>

          {/* Main heading with stagger effect */}
          <motion.h1 
            className="text-5xl pb-12 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            You've discovered the proven path to{' '}
            <motion.span 
              className="font-montserrat-bold inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              transform your life through hypnosis.
            </motion.span>
          </motion.h1>

          {/* Call to action with pulse effect */}
          <motion.div
            className="relative flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Subtle arrow indicators */}
            <motion.div
              className="text-ramsha-tertiary"
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ▼
            </motion.div>

            {/* Main text with gradient underline */}
            <div className="relative inline-block">
              <motion.span 
                className="text-2xl font-medium relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Do this simple step immediately
              </motion.span>

              {/* Animated gradient underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ramsha-tertiary via-purple-600 to-ramsha-tertiary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex lg:flex-row flex-col items-start pb-8 max-w-full">
          <Success />
        </div>

        {/* Animated Home Button */}
        <motion.div
          className="mt-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <motion.button
              className="group relative flex items-center gap-3 bg-ramsha-tertiary text-white px-8 py-4 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Sparkle effects */}
              {/* <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-200 opacity-50" />
              </motion.div> */}

              {/* Button content */}
              <Home className="w-5 h-5" />
              <span className="font-montserrat-bold tracking-wider">
                Continue Your Journey
              </span>

              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ramsha-tertiary via-purple-600 to-ramsha-tertiary"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ mixBlendMode: 'overlay' }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <BottomBar />
    </section>
  );
}
