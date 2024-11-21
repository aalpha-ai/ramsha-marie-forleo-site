/**
 * This code was generated by Builder.io
 */
import React from "react";

interface StrongTextProps {
  regular: string;
  italic: string;
}

export const StrongText: React.FC<StrongTextProps> = ({ regular }) => (
  <div className="flex flex-col pb-1 mt-4 w-full max-md:max-w-full">
    <p className="text-base ">
      FACT:
      <span className="font-bold">
        {" "}
        {regular}
        <span className="text-black"> potential... and you </span>
        <span className="italic text-black">know</span>
        <span className="text-black"> it.</span>
      </span>
    </p>
  </div>
);
