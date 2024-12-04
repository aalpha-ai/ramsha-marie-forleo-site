import * as React from "react";
import { ContentItemProps } from "./types";

export const ContentItem: React.FC<ContentItemProps> = ({
  imageUrl,
  title,
  date,
  videoIconUrl,
  audioIconUrl,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center pb-9 basis-0 min-h-[37px] min-w-[240px]">
      <div className="flex flex-col px-3.5 pb-3.5 w-full min-h-[1px]">
        <div className="flex z-10 flex-col">
          <div className="flex overflow-hidden flex-col justify-center w-full">
            <img
              loading="lazy"
              src={imageUrl}
              alt="Content thumbnail"
              className="object-contain w-full aspect-[1.54] max-w-[284px]"
            />
          </div>
          <div className="self-end py-1.5 mt-4 max-w-full text-lg tracking-wide leading-7 text-neutral-800 w-[284px]">
            {title}
          </div>
        </div>
        <div className="py-1 text-xs font-extrabold tracking-widest leading-loose uppercase text-neutral-500">
          {date}
        </div>
        <div className="flex gap-6 self-start mt-2.5 text-xs font-extrabold tracking-widest leading-loose uppercase whitespace-nowrap text-neutral-800">
          <div className="flex gap-1.5 my-auto">
            <img
              loading="lazy"
              src={videoIconUrl}
              alt=""
              className="object-contain shrink-0 w-2 aspect-[0.89]"
            />
            <div>Video</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src={audioIconUrl}
              alt=""
              className="object-contain shrink-0 w-2.5 aspect-[0.67]"
            />
            <div className="my-auto">Audio</div>
          </div>
        </div>
      </div>
    </div>
  );
};
