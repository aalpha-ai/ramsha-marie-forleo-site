/**
 * This code was generated by Builder.io
 */
import React from "react";

interface HeadingProps {
  text: string[];
}

export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <header className="flex flex-col items-center px-16 w-full text-4xl text-center leading-[54px] text-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pt-4 pb-6 max-w-full w-[775px]">
        <h2 className="px-9 w-full max-md:px-5 max-md:max-w-full">
          {text.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < text.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </header>
  );
};
