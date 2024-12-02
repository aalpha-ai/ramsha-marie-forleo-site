import * as React from "react";
import { TextBlockProps } from "./types";

export const TextBlock: React.FC<TextBlockProps> = ({
  text,
  isBold = false,
}) => <div className={`flex-auto ${isBold ? "font-bold" : ""}`}>{text}</div>;
