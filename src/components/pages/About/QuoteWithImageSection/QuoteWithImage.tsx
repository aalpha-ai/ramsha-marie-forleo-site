'use client'

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface QuoteWithImageProps {
  paragraphText: string;
  quoteText: string[];
}

export const QuoteWithImage: React.FC<QuoteWithImageProps> = ({
  paragraphText,
  quoteText,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Reduced movement range for subtler effect
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "0%"],  // Reduced from -50% to -10%
    {
      clamp: true,  // Added clamp to prevent overscroll
    }
  );

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Parallax - Optimized */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%]" // Reduced from 200% to 120%
        style={{
          y,
          backgroundImage: "url('/ramsha-pics/webp/gf7-sm.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-12 md:pb-24">
        <motion.div 
          className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="leading-relaxed mb-8 text-neutral-800 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {paragraphText}
          </motion.p>
          
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {quoteText.map((line, index) => (
              <motion.h2
                key={index}
                className="font-header text-[30px] lg:text-4xl leading-[1.1] text-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              >
                {line}
              </motion.h2>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};