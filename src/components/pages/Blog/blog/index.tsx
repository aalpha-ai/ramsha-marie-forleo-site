'use client'

import * as React from "react";
import { useScroll, motion, useTransform, cubicBezier } from "framer-motion";
import { ArticleCard } from "./ArticleCard";
import { TopPickItem } from "./TopPickItem";
import { recentArticles } from "./data";

const topPicks = [
  {
    category: "Writing & Creativity",
    title: "Bryce Dallas Howard: On Being An Artist, Mother & Entrepreneur"
  },
  {
    category: "Wellness",
    title: "Sleep Revolution: Transform Your Life One Night At A Time with Arianna Huffington"
  },
  {
    category: "Impact & Leadership",
    title: "Abby Wambach: Forget Little Red Riding Hood. Be a Wolf."
  },
  {
    category: "Personal Growth",
    title: "Epic Tim Ferriss Interview: Overcoming Fear, Battling Depression and Finding Self-Love"
  },
  {
    category: "Personal Growth",
    title: "Marie & Oprah on Super Soul Sunday"
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
            Most Recent
          </h1>

          {/* Featured Article */}
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
            <button className="bg-neutral-800 text-white font-bold py-3 px-12 rounded-full hover:bg-neutral-700 transition-colors">
              Show More
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
          {/* Free Audio Training */}
          <div className="bg-[#C27C6F] rounded-lg p-6 text-white">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Free Audio Training
            </h3>
            <h2 className="text-3xl font-bold mb-4">
              Learn How To Get <span className="inline-block border-2 border-white rounded-full px-2">Anything</span> You Want
            </h2>
            <button className="bg-[#F8E577] text-black font-bold text-sm py-2 px-4 rounded-full">
              DOWNLOAD NOW
            </button>
          </div>

          {/* Marie & Oprah Section */}
          <div className="relative">
            <img
              src="/ramsha-pics/webp/glowingfemmej3.webp"
              alt="Marie and Oprah"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80">
              <h2 className="text-3xl mb-2">Marie & Oprah</h2>
              <span className="text-xs font-bold tracking-[2.16px] uppercase">Watch Now</span>
            </div>
          </div>

          {/* Top Picks Section */}
          <div className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-3xl text-center mb-8">Top Picks</h2>
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
