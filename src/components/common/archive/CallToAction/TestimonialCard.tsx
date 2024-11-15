


import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  imageSrc?: string;
  translate?: MotionValue<number>;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  imageSrc,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate ? translate : 0,
      }}
      key={name}
    >
      <article className="flex flex-col p-8 bg-stone-200 min-w-[240px] w-[387px] max-md:px-5">
        <header className="flex items-center w-full">
          {imageSrc ? (
            <Image
              height={80}
              width={80}
              src={imageSrc}
              alt={`${name}'s profile`}
              className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square rounded-[40px]"
            />
          ) : (
            <div className="flex items-center py-4 pr-20 pl-24 w-full max-md:px-5">
              <div className="flex flex-col self-stretch my-auto w-[140px]" />
            </div>
          )}
          <div className="flex flex-col self-stretch pl-4 my-auto">
            <h3 className="text-xl font-bold leading-tight text-zinc-800">
              {name}
            </h3>
            <p className="mt-1.5 text-base leading-none text-zinc-800 text-opacity-80">
              {role}
            </p>
          </div>
        </header>
        <p className="pb-px mt-6 w-full text-lg leading-8 text-zinc-800 text-opacity-90 font-sans-template">
          {testimonial}
        </p>
      </article>
    </motion.div>
  );
};

export default TestimonialCard;
