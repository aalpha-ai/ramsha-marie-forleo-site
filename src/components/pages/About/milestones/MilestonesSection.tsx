'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { MilestoneCard } from "./MilestoneCard";

const milestoneData = [
  {
    imageSrc: "/ramsha-pics/gfshoot9.jpeg",
    imageAlt: "Sacred healing certification",
    title: "Somatic Healing",
    description: (
      <div className="text-black">
        Alhamdulillah, completed advanced
        certification in somatic healing
        and nervous system regulation
        with renowned practitioners.
      </div>
    ),
  },
  {
    imageSrc: "/ramsha-pics/gf5924.jpeg",
    imageAlt: "International retreat",
    title: "Global Impact",
    description: (
      <>
        <div className="text-black">
          Led transformative retreats for
          Muslim women across Dubai,
          Malaysia, and the UK, creating
          spaces for deep healing and
          spiritual connection.
        </div>
        <div className="font-bold text-orange-700">
          MashAllah, over
          1,000 sisters transformed
          through this work.
        </div>
      </>
    ),
  },
  {
    imageSrc: "/ramsha-pics/gf06171OMGLOOK.jpeg",
    imageAlt: "Published work feature",
    title: "Sacred Wisdom",
    description: (
      <>
        <div className="text-black">
          Featured in Muslim wellness
          publications for pioneering
          work in Islamic{" "}
        </div>
        <div className="font-bold text-orange-700">
          somatic healing practices.
        </div>
      </>
    ),
  },
];

const sentence = "I believe that true healing comes from honoring both your spiritual essence and your physical being.";

// Split sentence into words
const words = sentence.split(" ");

const finalQuote = [
  "Through these experiences and countless divine appointments, I continue to witness, the miraculous ways Allah guides us toward, the highest purpose and the deepest peace."
];

export const MilestonesSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-14 pt-20 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pt-12 pb-6 max-w-full tracking-normal leading-8 text-black w-[850px]">
          <motion.div 
            className="font-header w-full text-5xl tracking-wider leading-[62.4px] text-neutral-800 max-md:max-w-full"
            initial={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-[0.3em]">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (wordIndex * word.length + charIndex) * 0.03,
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="pt-2 mt-8 w-full max-md:max-w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            This includes embracing your divine feminine energy, your body's innate wisdom, and most importantly, your
            connection with Allah. Whether you're seeking spiritual growth or emotional healing, understanding your
            nervous system's role in transformation is essential for experiencing the deep peace and alignment you're meant for.
          </motion.div>
          
          <motion.div 
            className="pt-2 mt-8 w-full max-md:max-w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            SubhanAllah, every sister has the power to heal, transform, and embody her highest purpose through
            faith-aligned practices and divine guidance.
          </motion.div>
          
          <motion.div 
            className="pt-2 pb-2.5 mt-8 w-full max-md:max-w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            By Allah's grace, this journey of combining spiritual wisdom with somatic healing has led to some
            beautiful milestones. For instance:
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-9 justify-center self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {milestoneData.map((milestone, index) => (
            <MilestoneCard 
              key={index} 
              {...milestone} 
            />
          ))}
        </div>

        <motion.div 
          className="flex flex-col pt-8 pb-8 mt-12 max-w-full tracking-wider leading-[62.4px] text-neutral-800 w-[850px] max-md:mt-10"
          initial={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-md:max-w-full font-header text-5xl">
            {finalQuote.map((line, lineIndex) => (
              <div key={lineIndex} className="block">
                {line.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-[0.3em]">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: (lineIndex * 15 + wordIndex * word.length + charIndex) * 0.02,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
