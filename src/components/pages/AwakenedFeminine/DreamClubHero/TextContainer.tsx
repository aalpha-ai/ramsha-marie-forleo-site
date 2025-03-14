/**
 * This code was generated by Builder.io
 */
import React from "react";

interface TextContainerProps {
  paragraphs: string[];
}

export const TextContainer: React.FC<TextContainerProps> = ({ paragraphs }) => {
  return (
    <div className="flex flex-col pb-4 w-full tracking-normal max-md:max-w-full">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`w-full max-md:max-w-full ${index > 0 ? "mt-4" : ""}`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};
