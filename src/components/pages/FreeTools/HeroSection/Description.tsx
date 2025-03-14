/**
 * This code was generated by Builder.io
 */
import React from "react";

interface DescriptionProps {
  lines: string[];
}

export const Description: React.FC<DescriptionProps> = ({ lines }) => {
  return (
    <p className="mt-7 w-full text-[17px] tracking-normal leading-8 text-black max-md:max-w-full">
      {lines}
    </p>
  );
};
