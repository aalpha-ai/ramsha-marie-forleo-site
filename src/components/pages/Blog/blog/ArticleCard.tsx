import * as React from "react";
import { ArticleProps } from "./types";

export const ArticleCard: React.FC<ArticleProps> = ({
  category,
  title,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col pb-6 w-full border-b border-solid border-b-stone-300 max-md:max-w-full">
      <div className="flex justify-center items-center">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.54] basis-0 max-w-[536px] min-w-[240px] max-md:max-w-full"
        />
      </div>
      <div className="flex items-start self-start pt-1 mt-5 text-xs font-extrabold tracking-widest leading-4 text-orange-700 uppercase">
        <div>{category}</div>
      </div>
      <div className="flex justify-center items-start mt-2 text-3xl tracking-wider leading-[49px] text-neutral-800">
        <div className="flex-1 shrink w-full min-w-[240px] max-md:max-w-full">
          {title}
        </div>
      </div>
    </div>
  );
};
