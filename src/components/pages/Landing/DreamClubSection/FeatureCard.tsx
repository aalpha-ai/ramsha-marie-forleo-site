/**
 * This code was generated by Builder.io
 */
import React from "react";

interface FeatureCardProps {
  title: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, content }) => {
  return (
    <article className="flex flex-col gap-0 px-6 pt-5 pb-3 rounded-2xl border border-black border-solid bg-stone-50 w-full max-md:px-5">
      <header className="flex flex-col pt-4 pb-3 w-full text-sm font-bold tracking-widest leading-6 uppercase text-neutral-800">
        <h2 className="max-w-40 mx-auto">{title}</h2>
      </header>
      <p className="flex flex-col pb-4 w-full text-base font-light tracking-normal leading-7 text-black">
        <span className="w-full">{content}</span>
      </p>
    </article>
  );
};

export default FeatureCard;
