import * as React from "react";
import { ContentItemProps } from "./types";

export const ContentItem: React.FC<ContentItemProps> = ({
  imageUrl,
  title,
  date,
  href,
}) => {
  return (
    <div className="group cursor-pointer transition-all duration-300 hover:opacity-80">
      <div className="flex flex-col max-w-[400px] gap-4">
        <div className="w-full overflow-hidden">
          <img
            loading="lazy"
            src={imageUrl}
            alt="Content thumbnail"
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[26px] leading-tight font-serif text-neutral-800">
            {title}
          </h3>
          <p className="text-xs tracking-[0.15em] uppercase text-neutral-500 font-medium">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};
