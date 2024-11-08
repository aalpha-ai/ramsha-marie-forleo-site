/**
 * This code was generated by Builder.io
 */
import React from "react";

interface BorderedSectionProps {
  children: React.ReactNode;
}

export const BorderedSection: React.FC<BorderedSectionProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col px-7 pt-px pb-7 mt-20 w-full text-center text-black rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 justify-center p-5 w-full max-md:max-w-full">
        {children}
      </div>
    </div>
  );
};
