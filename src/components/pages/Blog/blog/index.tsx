'use client'

import * as React from "react";
import { useScroll, motion, useTransform, cubicBezier, useInView } from "framer-motion";
import { ArticleCard } from "./ArticleCard";
import { TopPickItem } from "./TopPickItem";
import { recentArticles } from "./data";

const topPicks = [
  {
    category: "Spiritual Growth",
    title: "Unlocking Your Divine Feminine: A Journey to Self-Discovery Through Islamic Teachings"
  },
  {
    category: "Wellness",
    title: "Somatic Healing: Transform Your Nervous System and Connect with Your Higher Self"
  },
  {
    category: "Leadership",
    title: "From Burnout to Balance: Embracing Your Feminine Power in Business"
  },
  {
    category: "Personal Growth",
    title: "The Rich Receiver Method: Opening Your Heart to Divine Abundance"
  },
  {
    category: "Spiritual Practice",
    title: "Divine Surrender: Finding Peace Through Faith and Trust in Allah"
  }
];

export const BlogLayout: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef(null);
  const leftColumnRef = React.useRef(null);
  const rightColumnRef = React.useRef(null);
  
  const isTitleInView = useInView(titleRef, { once: true });
  const isLeftColumnInView = useInView(leftColumnRef, { once: true });
  const isRightColumnInView = useInView(rightColumnRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Slower transform for the right column
  const rightColumnY = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    ["0%", "0%", "-15%"],
    {
      ease: cubicBezier(0.16, 1, 0.3, 1),
    }
  );

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col items-center max-w-[1400px] mx-auto px-6 md:px-14 min-h-[200vh]"
    >
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Left Column - Most Recent */}
        <motion.div 
          ref={leftColumnRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLeftColumnInView ? 1 : 0, x: isLeftColumnInView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[58%]"
        >
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl mb-8"
          >
            Latest Wisdom
          </motion.h1>

          {/* Featured Article */}
          {recentArticles.map((article, index) => {
            const articleRef = React.useRef(null);
            const isArticleInView = useInView(articleRef, { once: true });
            
            return (
              <motion.div 
                key={index}
                ref={articleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isArticleInView ? 1 : 0, y: isArticleInView ? 0 : 20 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="w-full mb-12"
              >
                <a href="#" className="group">
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src="/ramsha-pics/webp/glowingfemmej3.webp"
                      alt={article.imageAlt}
                      className="w-full aspect-[16/9] object-cover rounded-lg"
                    />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isArticleInView ? 1 : 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-6"
                  >
                    <span className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase">
                      {article.category}
                    </span>
                    
                    <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] mt-3 group-hover:text-[#D4502B] transition-colors">
                      {article.title}
                    </h2>
                  </motion.div>
                </a>
              </motion.div>
            );
          })}

          {/* Show More Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-12 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C27C6F] text-white font-bold py-3 px-12 rounded-full hover:bg-[#b16a5d] transition-colors"
            >
              Explore More Wisdom
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Updated Right Column with slower movement */}
        <motion.div 
          ref={rightColumnRef}
          style={{ y: rightColumnY }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isRightColumnInView ? 1 : 0, x: isRightColumnInView ? 0 : 20 }}
          className="w-full md:w-[42%] space-y-8 md:sticky md:top-8 h-fit"
          transition={{ 
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            stiffness: 50,
            damping: 20,
            mass: 1.5
          }}
        >
          {/* Free Training Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-[#C27C6F] rounded-lg p-6 text-white"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Free Meditation Training
            </h3>
            <h2 className="text-3xl font-bold mb-4">
              Unlock Your <span className="inline-block border-2 border-white rounded-full px-2">Divine</span> Feminine Power
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F8E577] text-black font-bold text-sm py-2 px-4 rounded-full"
            >
              BEGIN YOUR JOURNEY
            </motion.button>
          </motion.div>

          {/* Featured Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/ramsha-pics/webp/glowingfemmej3.webp"
              alt="Spiritual transformation session"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80">
              <h2 className="text-3xl mb-2">Awakened Feminine Flow</h2>
              <span className="text-xs font-bold tracking-[2.16px] uppercase">Learn More</span>
            </div>
          </motion.div>

          {/* Top Picks Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-[#FFF5F5] p-8 rounded-lg"
          >
            <h2 className="text-3xl text-center mb-8">Sacred Wisdom</h2>
            <div className="space-y-6">
              {topPicks.map((pick, index) => {
                const pickRef = React.useRef(null);
                const isPickInView = useInView(pickRef, { once: true });
                
                return (
                  <motion.div 
                    key={index}
                    ref={pickRef}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isPickInView ? 1 : 0, x: isPickInView ? 0 : -20 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="group"
                  >
                    <span className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase">
                      {pick.category}
                    </span>
                    <h3 className="text-lg mt-2 group-hover:text-[#D4502B] transition-colors">
                      {pick.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
