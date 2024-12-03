'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { TextBlock } from "./components/TextBlock";
import { LinkText } from "./components/LinkText";

const biographyText = [
  "From years of spiritual seeking and deep personal healing,",
  "to intensive study with renowned somatic practitioners,",
  "to training in nervous system regulation and trauma healing,",
  "to guiding hundreds of Muslim women through embodied",
  "transformation, to creating a sacred space where feminine",
  "wisdom meets Islamic principles, Alhamdulillah, I am living",
  "proof that...",
];

const headingText = [
  "Divine healing flows",
  "through mind, body, and soul."
];

export const BioContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-20 py-20 max-md:px-5">
      <motion.div 
        className="max-w-[850px] w-full space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <TextBlock 
            content="A Muslim woman with a passion for healing and a heart for service, I'm proud to have created a sacred space that touches souls across the globe." 
            className="leading-relaxed"
          />
        </motion.div>

        {/* Programs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="space-y-4">
            <p className="leading-relaxed">
              Through our transformative programs{" "}
              <LinkText href="/programs" text="Awakened Feminine" /> and{" "}
              <LinkText href="/community" text="Sacred Sisterhood" />, 
              world-class spiritual guidance programs, and a thriving sisterhood community, 
              I help Muslim women reconnect with their divine essence.
            </p>
          </div>
        </motion.div>

        {/* Ways I Can Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-4">
            <p className="">In fact, here are a few ways I might be able to help:</p>
            
            <ul className="space-y-6 list-none">
              <li className="leading-relaxed flex items-start gap-4">
                <span className="text-ramsha-tertiary mt-1">✧</span>
                <span>
                  Feeling disconnected from your body and spirit? I'll guide you through{" "}
                  <LinkText href="/somatic-healing" text="somatic healing" className="text-ramsha-tertiary hover:text-ramsha-tertiary/80" />{" "}
                  to restore your divine connection.
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-4">
                <span className="text-ramsha-tertiary mt-1">✧</span>
                <span>
                  Struggling to find peace and balance in your life? Discover your{" "}
                  <LinkText href="/spiritual-guidance" text="inner harmony" className="text-ramsha-tertiary hover:text-ramsha-tertiary/80" />{" "}
                  through faith-aligned practices.
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-4">
                <span className="text-ramsha-tertiary mt-1">✧</span>
                <span>
                  Seeking to embrace your feminine essence while honoring your deen? I'll show you the{" "}
                  <LinkText href="/feminine-embodiment" text="path" className="text-ramsha-tertiary hover:text-ramsha-tertiary/80" />{" "}
                  to authentic embodiment.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Personal Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="space-y-6">
            <p className="leading-relaxed">
              I wasn't born knowing how to do any of this. My journey began with a deep calling 
              to serve and heal, guided by faith and divine wisdom.
            </p>

            <div className="flex gap-8 items-center max-md:flex-col">
              <div className="flex-1">
                <h2 className="font-header text-[30px] lg:text-4xl leading-tight mb-4">
                  "Your Body is a Sacred Vessel"
                </h2>
                <p className="leading-relaxed">
                  This isn't just a saying—it's the foundation of my{" "}
                  <LinkText href="/philosophy" text="healing philosophy" /> and the key 
                  to unlocking your divine potential.
                </p>
              </div>
              <div className="w-1/3 max-md:w-full">
                {/* <img
                  src="/ramsha-pics/gf5924.jpeg"
                  alt="Ramsha portrait"
                  className="w-full rounded-lg object-cover aspect-[3/4]"
                /> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TextBlock 
            content="Together, we'll create a life filled with peace, purpose, and divine alignment."
            className="leading-relaxed"
          />
        </motion.div>

        {/* Biography Quote Section */}
        <motion.div 
          className="relative mt-1 rounded-lg shadow-soft w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* Biography Text */}
          <div className="pb-16">
            <motion.div 
              className="leading-relaxed text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {biographyText.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="mb-2"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            {/* Heading Text */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              {headingText.map((line, index) => (
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="text-[30px] lg:text-4xl font-header tracking-wider leading-tight text-neutral-800 mb-3"
                >
                  {line}
                </motion.h2>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
