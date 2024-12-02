import * as React from "react";
import { TextBlockProps } from "../types";

export const TextBlock: React.FC<TextBlockProps> = ({
  content,
  className = "",
}) => (
  <div
    className={`text-base tracking-normal leading-8 text-black ${className}`}
  >
    {content}
  </div>
);
