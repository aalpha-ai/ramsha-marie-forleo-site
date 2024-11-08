"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TestimonialCard from "@/components/common/CallToAction/TestimonialCard";

export const TestimonialParallax = ({
  testimonials,
}: {
  testimonials: {
    name: string;
    role: string;
    testimonial: string;
    imageSrc: string;
  }[];
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className=" overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <motion.div className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 mb-20">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              {...testimonial}
              translate={translateX}
              key={testimonial.name}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful testimonials with the latest technologies and
        frameworks. We are a team of passionate developers and designers that
        love to build amazing testimonials.
      </p>
    </div>
  );
};
