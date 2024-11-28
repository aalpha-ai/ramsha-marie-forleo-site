/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface FreeTrainingButtonProps {
  className?: string;
}

const FreeTrainingButton: React.FC<FreeTrainingButtonProps> = ({ className = '' }) => {
  return (
    <button className={`font-subheader w-full md:w-[250px] whitespace-nowrap lg:px-4 xl:px-8 pt-2.5 pb-3 lg:text-[14px] xl:text-base text-center text-white capitalize bg-ramsha-tertiary rounded-3xl shadow-button cursor-pointer hover:shadow-button-hover max-md:px-5 ${className}`}>
      <a
        href="https://www.marieforleo.com/how-to-get-anything-you-want"
        target="_blank"
        rel="noopener noreferrer"
      >
        Free Hypnosis
      </a>
    </button>
  );
};

export default FreeTrainingButton;
