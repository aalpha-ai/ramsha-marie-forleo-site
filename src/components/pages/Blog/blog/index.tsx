'use client'

import * as React from "react";
import { useScroll, motion, useTransform, cubicBezier } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Slower transform for the right column
  const rightColumnY = useTransform(
    scrollYProgress,
    [0, 0.75, 1], // Scroll progress points
    ["0%", "0%", "-15%"], // Reduced movement range for slower effect
    {
      ease: cubicBezier(0.16, 1, 0.3, 1), // Slower easing curve
    }
  );

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col items-center max-w-[1400px] mx-auto px-6 md:px-14 min-h-[200vh]"
    >
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Left Column - Most Recent */}
        <div className="w-full md:w-[58%]">
          <h1 className="font-display text-4xl md:text-5xl mb-8">
            Latest Wisdom
          </h1>

          {/* Featured Article */}
          <div className="w-full mb-12">
            <a href="#" className="group">
              <div className="relative">
                <img
                  src="/ramsha-pics/webp/glowingfemmej3.webp"
                  alt="Woman in peaceful meditation"
                  className="w-full aspect-[16/9] object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-6">
                <span className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase">
                  Spiritual Growth
                </span>
                
                <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] mt-3 group-hover:text-[#D4502B] transition-colors">
                  Embracing Divine Surrender: Your Path to Unshakeable Faith and Inner Peace
                </h2>
              </div>
            </a>
          </div>
          <div className="w-full mb-12">
            <a href="#" className="group">
              <div className="relative">
                <img
                  src="/ramsha-pics/webp/glowingfemmej3.webp"
                  alt="Featured article image"
                  className="w-full aspect-[16/9] object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-6">
                <span className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase">
                  Personal Growth
                </span>
                
                <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] mt-3 group-hover:text-[#D4502B] transition-colors">
                  Why Everything You Know About Success & Productivity Is Wrong with Seth Godin
                </h2>
              </div>
            </a>
          </div>
          <div className="w-full mb-12">
            <a href="#" className="group">
              <div className="relative">
                <img
                  src="/ramsha-pics/webp/glowingfemmej3.webp"
                  alt="Featured article image"
                  className="w-full aspect-[16/9] object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-6">
                <span className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase">
                  Personal Growth
                </span>
                
                <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] mt-3 group-hover:text-[#D4502B] transition-colors">
                  Why Everything You Know About Success & Productivity Is Wrong with Seth Godin
                </h2>
              </div>
            </a>
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-12 mb-20">
            <button className="bg-[#C27C6F] text-white font-bold py-3 px-12 rounded-full hover:bg-[#b16a5d] transition-colors">
              Explore More Wisdom
            </button>
          </div>
        </div>

        {/* Updated Right Column with slower movement */}
        <motion.div 
          style={{ y: rightColumnY }}
          className="w-full md:w-[42%] space-y-8 md:sticky md:top-8 h-fit"
          transition={{ 
            duration: 1.5, // Increased duration
            ease: [0.16, 1, 0.3, 1], // Slower ease curve
            stiffness: 50, // Reduced stiffness for slower movement
            damping: 20, // Adjusted damping
            mass: 1.5 // Added mass for more inertia
          }}
        >
          {/* Free Training Section */}
          <div className="bg-[#C27C6F] rounded-lg p-6 text-white">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Free Meditation Training
            </h3>
            <h2 className="text-3xl font-bold mb-4">
              Unlock Your <span className="inline-block border-2 border-white rounded-full px-2">Divine</span> Feminine Power
            </h2>
            <button className="bg-[#F8E577] text-black font-bold text-sm py-2 px-4 rounded-full">
              BEGIN YOUR JOURNEY
            </button>
          </div>

          {/* Featured Section */}
          <div className="relative">
            <img
              src="/ramsha-pics/webp/glowingfemmej3.webp"
              alt="Spiritual transformation session"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80">
              <h2 className="text-3xl mb-2">Awakened Feminine Flow</h2>
              <span className="text-xs font-bold tracking-[2.16px] uppercase">Learn More</span>
            </div>
          </div>

          {/* Top Picks Section */}
          <div className="bg-[#FFF5F5] p-8 rounded-lg">
            <h2 className="text-3xl text-center mb-8">Sacred Wisdom</h2>
            <div className="space-y-6">
              {topPicks.map((pick, index) => (
                <div key={index} className="group">
                  <span className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase">
                    {pick.category}
                  </span>
                  <h3 className="text-lg mt-2 group-hover:text-[#D4502B] transition-colors">
                    {pick.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
