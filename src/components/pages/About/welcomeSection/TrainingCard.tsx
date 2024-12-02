import * as React from "react";
import { TrainingCardProps } from "./types";
import { ImageComponent } from "./ImageComponent";

export const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <div className="flex overflow-hidden flex-col self-stretch px-8 pt-12 mt-4 w-full bg-red-100 shadow-sm max-w-[1000px] max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap items-start w-full max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink items-start px-2.5 pt-3.5 pb-2 text-base tracking-normal leading-8 text-black basis-20 min-h-[1px] min-w-[240px] max-md:max-w-full">
        <div className="self-stretch text-4xl tracking-wider leading-[62.4px] text-neutral-800">
          {title.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4">
          {description.map((line, index) => (
            <div key={index} className="mt-4">
              {line}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 shrink justify-center items-end px-12 pt-12 basis-0 min-h-[1px] min-w-[240px] max-md:px-5 max-md:max-w-full">
        <ImageComponent
          src={imageSrc}
          alt="Training preview"
          className="object-contain aspect-[0.61] max-w-[428px] min-w-[240px] w-[328px]"
        />
      </div>
    </div>
  </div>
);
