import * as React from "react";
import { AboutSection } from "./AboutSection";

export const AboutPage: React.FC = () => {
  const aboutData = {
    title: "And now, my beloved\nsister...",
    textBlocks: [
      [
        "Bismillah. I'm here as your guide and sister in faith.",
        "This sacred container is built on divine love,",
        "embodied wisdom, and a deep commitment to serve",
        "Allah and His creation through healing work.",
      ],
      [
        "Through our healing circles, somatic practices,",
        "and spiritual guidance — we're here to help you",
        "reconnect with your body's wisdom and your soul's",
        "purpose. To help you create a life of deep peace",
        "and alignment with your divine nature, bi'ithnillah.",
      ],
      [
        "Whether you're seeking to heal trauma, deepen your",
        "spiritual connection, or embody your feminine power,",
        "we're here to support your journey through gentle",
        "somatic practices that honor both your faith and",
        "your nervous system's natural capacity to heal.",
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
            alt="Sacred healing journey illustration"
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
