import * as React from "react";
import { BadgeProps } from "./types";

export const Badge: React.FC<BadgeProps> = ({ text, className }) => (
  <div
    className={`px-2.5 py-1.5 text-xs font-bold leading-loose text-center text-white uppercase whitespace-nowrap bg-zinc-800 tracking-[3.2px] w-[74px] ${className}`}
  >
    {text}
  </div>
);
