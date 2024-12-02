import * as React from "react";
import { LinkTextProps } from "../types";

export const LinkText: React.FC<LinkTextProps> = ({
  href,
  text,
  className = "",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`font-bold leading-8 text-orange-700 ${className}`}
  >
    {text}
  </a>
);
