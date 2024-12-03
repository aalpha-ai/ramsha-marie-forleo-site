import * as React from "react";
import { BiographyText } from "./BiographyText";

export const BiographyContainer: React.FC = () => {
  const biographyText = [
    "From years of spiritual seeking and deep personal healing,",
    "to intensive study with renowned somatic practitioners,",
    "to training in nervous system regulation and trauma healing,",
    "to guiding hundreds of Muslim women through embodied",
    "transformation, to creating a sacred space where feminine",
    "wisdom meets Islamic principles, Alhamdulillah, I am living",
    "proof that...",
  ];

  const headingText = [
    "Divine healing flows",
    "through mind, body, and soul."
  ];

  return (
    <div className="flex flex-col items-start px-8 pt-2.5 max-md:px-5">
      <BiographyText text={biographyText} heading={headingText} />
    </div>
  );
};
