import * as React from "react";
import { TextBlockProps } from "./types";

export const TextBlock: React.FC<TextBlockProps> = ({ content }) => (
  <div className="pt-4 pb-2.5 mt-4 w-full">
    {content.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </div>
);
