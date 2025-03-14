/**
 * This code was generated by Builder.io
 */
import * as React from "react";
import { TextBlockProps } from "./types";

export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  className,
}) => (
  <p
    className={`px-3 pt-0.5 pb-1 w-full italic max-md:max-w-full ${className}`}
  >
    {children}
  </p>
);
