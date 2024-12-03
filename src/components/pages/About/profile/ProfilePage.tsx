import * as React from "react";
import { IntroSection } from "./IntroSection";

const ProfilePage: React.FC = () => {
  const introData = {
    mainText: "Assalamu alaikum, I'm Ramsha. A somatic healer, spiritual guide, and embodiment coach",
    subTexts: [
      { text: "dedicated to helping Muslimahs" },
      { text: "embrace their divine feminine power", isBold: true },
    ],
    highlightText: "through faith-aligned healing.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/69b9ebea6da3819e0c1ea0f7a054a3fa0f03bc7662466e84000d2518429eedbe?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  };

  return (
    <div className="flex flex-col pt-11">
      <IntroSection {...introData} />
    </div>
  );
};

export default ProfilePage;
