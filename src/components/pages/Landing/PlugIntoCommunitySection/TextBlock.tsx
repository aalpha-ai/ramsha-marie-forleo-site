/**
 * This code was generated by Builder.io
 */
import React from "react";

interface TextBlockProps {}

export const TextBlock: React.FC<TextBlockProps> = () => {
  const paragraphs = [
    {
      text: "Every smart entrepreneur knows that your ability to succeed is determined by the quality of people you surround yourself with.",
      isItalic: false,
    },
    {
      text: "You've likely got beautiful people in your life. But if any of them have limiting beliefs around money or success, or if they operate in a state of fear, negativity, or lack — it will limit your success and your future.",
      isItalic: true,
    },
    {
      text: "You have the power to choose who you want to be and the life you want to create.",
      isBold: true,
    },
    {
      text: "Choose wisely.",
      isItalic: false,
    },
    {
      text: "You still have so many gifts and unique contributions to make. AND, you have so many more adventures to experience! Dream Club will turn those 'someday' dreams into reality.",
      isItalic: true,
    },
  ];

  return (
    <div className="flex flex-col grow shrink items-center bg-stone-50 leading-[54px] min-w-[240px] text-neutral-800 max-md:max-w-full">
      <div className="flex flex-col px-12 py-20 max-w-full max-md:px-5">
        <h2 className="flex flex-col pt-2.5 pb-3.5 text-4xl max-md:max-w-full">
          Plug into our community. <br /> Amplify your joy. <br /> Fast-track
          your success.
        </h2>
        <h3 className="pt-2.5 pb-3.5 text-3xl max-md:max-w-full">
          Have a <span className="italic">damn good time</span> along the way.
        </h3>
        <div className="flex flex-col pt-5 text-base font-light tracking-normal leading-7 text-black max-md:max-w-full">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`mt-4 w-full max-md:max-w-full ${
                paragraph.isItalic ? "italic" : ""
              } ${paragraph.isBold ? "font-bold" : ""}`}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
