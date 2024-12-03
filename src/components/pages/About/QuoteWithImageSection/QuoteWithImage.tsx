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

  // Smoother parallax effect
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "0%"],
    {
      clamp: false,
    }
  );

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Parallax - Optimized */}
      <motion.div 
        className="absolute inset-0 w-full h-[200%]" // Increased height for more dramatic effect
        style={{
          y,
          backgroundImage: "url('/ramsha-pics/glowingfemmej3.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-[80vh] flex items-center">
        <motion.div 
          className="max-w-xl bg-white rounded-3xl p-12 shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="leading-relaxed mb-8 text-neutral-800"
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
                className="font-display leading-[1.1] text-neutral-800"
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