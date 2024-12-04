import * as React from "react";
import { MediaIconProps } from "./types";

export const MediaIcon: React.FC<MediaIconProps> = ({ type, icon }) => (
  <div className="flex gap-1.5 items-start pt-1.5 pb-4 w-14">
    <img
      loading="lazy"
      src={icon}
      alt={`${type} icon`}
      className="object-contain shrink-0 w-2 aspect-[0.89]"
    />
    <div>{type}</div>
  </div>
);
