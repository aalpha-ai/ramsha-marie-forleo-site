import * as React from "react";
import { TextBlockProps } from "./types";

export const TextBlock: React.FC<TextBlockProps> = ({ content }) => (
  <div className="pt-2 pb-2.5 w-full text-black max-md:max-w-full">
    {content}
  </div>
);
