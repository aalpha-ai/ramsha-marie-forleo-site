'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Search, Sparkles, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDF6F3] flex items-center justify-center p-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Floating mail icon */}
        <motion.div
          className="text-[#C68B5F] mb-8"
          animate={{ 
            y: [-5, 5, -5],
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Mail className="w-16 h-16" />
        </motion.div>

        {/* Main Heading */}
        <motion.div 
          className="relative mb-12"
          animate={{ 
            y: [-5, 5, -5],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div className="flex flex-col items-center gap-2">
            <motion.h2 
              className="uppercase tracking-widest text-sm font-medium text-[#C68B5F] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Oh darling...
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Looks like this page took a self-care day
            </motion.h1>
            <motion.div
              className="absolute -right-4 -top-4"
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
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-12"
        >
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            While we love a good wellness moment, let's get you back to where you need to be. 
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link 
              href="/" 
              className="group relative flex items-center justify-center px-8 py-4 bg-[#C68B5F] text-white rounded-full font-medium transition-all duration-300 ease-out overflow-hidden w-full sm:w-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="flex items-center gap-3 justify-center">
                <Home className="w-5 h-5" />
                <span className="text-[18px] font-bold tracking-wider">Return Home</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#C68B5F]/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
} 