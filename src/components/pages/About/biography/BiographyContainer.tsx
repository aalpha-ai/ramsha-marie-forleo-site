import * as React from "react";
import { BiographyText } from "./BiographyText";

export const BiographyContainer: React.FC = () => {
  const biographyText = [
    "From the non-stop frenzy working on the floor of the New",
    "York Stock Exchange, to the well-heeled halls of Condé Nast",
    "publishing, to choreographing hip-hop on MTV and being",
    "one of the world's first Nike Elite Dance Athletes, to",
    "publishing two international bestsellers, to founding a digital",
    "education company named in the Inc. 500, I'm undeniable",
    "proof that...",
  ];

  const headingText = ["Traditional rules were", "made to be broken."];

  return (
    <div className="flex flex-col items-start px-8 pt-2.5 max-md:px-5">
      <BiographyText text={biographyText} heading={headingText} />
    </div>
  );
};
