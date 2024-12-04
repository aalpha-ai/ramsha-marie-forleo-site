import * as React from "react";
import { TopPickProps } from "./types";

export const TopPickItem: React.FC<TopPickProps> = ({ category, title }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-start w-full text-xs font-extrabold tracking-widest leading-4 text-red-500 uppercase max-w-[272px]">
        <div className="flex-1 shrink pb-px w-full min-w-[240px]">
          {category}
        </div>
      </div>
      <div className="flex justify-center items-start mt-1.5 w-full text-xs tracking-normal leading-6 text-black max-w-[272px]">
        <div className="flex-1 shrink pt-1 pb-1.5 w-full min-w-[240px]">
          {title}
        </div>
      </div>
    </div>
  );
};
