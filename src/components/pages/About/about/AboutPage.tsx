import * as React from "react";
import { AboutSection } from "./AboutSection";

export const AboutPage: React.FC = () => {
  const aboutData = {
    title: "Which brings me to\nyou.",
    textBlocks: [
      [
        "I'm here to serve. My company is built on a bedrock",
        "of love, a passion for what's possible and a",
        "commitment to be an unstoppable force for good.",
      ],
      [
        "Through our free content, online training programs",
        "and anything else we might offer — we're in this to",
        "make a difference. To help you build a life that you",
        "truly love. A life that's one-of-a-kind and brilliantly",
        "tailored for you.",
      ],
      [
        "Whether you're starting or growing your business",
        "or looking to make a big change in your personal",
        "life, we're here to help you reach the highest levels",
        "of your creative potential and tap into the deepest",
        "wisdom within you.",
      ],
    ],
  };

  return (
    <div className="flex justify-center items-center px-12 pt-12 max-md:px-5">
      <div className="flex flex-wrap self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-2.5 pb-12 w-96 min-h-[1px] min-w-[240px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/f51185f37a133dbb2be2ad7086cdcc2ca07a43114c3002113b935c42b3afea66?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
            alt="About section decorative image"
            className="object-contain max-w-full aspect-[0.54] w-[364px]"
          />
        </div>
        <AboutSection
          title={aboutData.title}
          textBlocks={aboutData.textBlocks}
        />
      </div>
    </div>
  );
};
