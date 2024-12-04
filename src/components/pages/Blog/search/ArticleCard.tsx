import * as React from "react";
import { ArticleCardProps } from "./types";

export const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  title,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col grow justify-center pb-9 min-h-[360px]">
      <div className="flex flex-col px-3.5 w-full min-h-[1px]">
        <div className="flex flex-col">
          <div className="flex overflow-hidden flex-col justify-center w-full">
            <img
              loading="lazy"
              src={imageUrl}
              alt={imageAlt}
              className="object-contain w-full aspect-[1.54] max-w-[284px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-start self-start mt-5 text-xs font-extrabold tracking-widest leading-4 text-orange-700 uppercase whitespace-nowrap">
          <div className="pb-px">{category}</div>
        </div>
        <div className="flex z-10 justify-center items-start pb-2 mt-2 -mb-3 text-lg tracking-wide leading-7 text-neutral-800 max-md:mb-2.5">
          <div className="flex-1 shrink py-1.5 w-full min-w-[240px]">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};
