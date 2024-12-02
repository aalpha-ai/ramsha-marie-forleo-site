import * as React from "react";
import { BioSectionProps } from "../types";
import { LinkText } from "./LinkText";

export const BioSection: React.FC<BioSectionProps> = ({
  text,
  link,
  additionalText,
}) => (
  <div className="flex flex-col pt-2.5 pr-11 w-full max-md:pr-5 max-md:max-w-full">
    <div className="text-black max-md:max-w-full">{text}</div>
    {link && (
      <div className="flex z-10 gap-px -mb-2 ml-16 max-w-full font-bold max-md:ml-2.5">
        <LinkText href={link.href} text={link.text} />
        {additionalText && (
          <div className="grow shrink self-start text-black">
            {additionalText}
          </div>
        )}
      </div>
    )}
  </div>
);
