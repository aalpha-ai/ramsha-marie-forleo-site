/**
 * This code was generated by Builder.io
 */
import React from "react";
import { TextBlock } from "./TextBlock";
import { Heading } from "./Heading";
import BlurFade from "@/components/magicui/blur-fade";

interface BookSectionProps {
  imageSrc: string;
}

const BookSection: React.FC<BookSectionProps> = ({ imageSrc }) => {
  const textBlocks = [
    {
      content:
        "Look, I might buy more books and courses than anyone on the planet 🙈🙈. But the REAL secret to my joy, wealth, and sustainable success (like 23 yrs and counting!) as a multipassionate creator is that I do NOT go at it alone.",
      isItalic: true,
    },
    {
      content:
        "I surround myself with smart people. Folks way smarter than me. I collaborate. I connect. I stay humble in the position of a lifelong student. My relationships are the core of my heart, my life, and anything good that I'm able to share with the world.",
      isItalic: false,
    },
    {
      content:
        "You know this already. Who you surround yourself with matters. The energy you plug into on a regular basis has a significant impact on how you think, how you feel, and ultimately — who you become.",
      isItalic: false,
    },
    {
      content:
        "If you've read this far, I think you already know that we're your people.",
      isItalic: true,
      isBold: true,
    },
    {
      content: "We believe in you. We're here to help you win.",
      isItalic: false,
    },
    {
      content:
        "Because the world really does need that very special gift that only you have.",
      isItalic: true,
    },
  ];

  return (
    <section className="grid md:grid-cols-[1fr_1.25fr] justify-center bg-landing-stone-dark">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Decorative image"
        className="object-cover w-full h-full xl:max-h-[825px] max-md:max-w-full"
      />
      <div className="flex flex-col grow shrink justify-center items-start py-20  max-md:px-5 max-md:max-w-full">
        <BlurFade>
          <div className="flex flex-col p-10 relative md:right-24 rounded-2xl border border-black border-solid bg-stone-50 max-md:px-5 max-md:max-w-full">
            <Heading />
            {textBlocks.map((block, index) => (
              <TextBlock key={index} {...block} />
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default BookSection;
