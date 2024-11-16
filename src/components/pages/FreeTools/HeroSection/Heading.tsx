/**
 * This code was generated by Builder.io
 */
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className="w-full whitespace-nowrap text-[32px] md:text-[40px] lg:text-[56px] font-[600] tracking-wide leading-[70px] text-neutral-800 font-caslon">
      {children}
    </h1>
  );
};
