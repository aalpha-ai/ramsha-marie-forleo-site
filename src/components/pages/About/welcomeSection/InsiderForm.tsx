import * as React from "react";
import { InsiderFormProps } from "./types";

export const InsiderForm: React.FC<InsiderFormProps> = ({
  title,
  description,
}) => (
  <div className="flex z-10 flex-col px-2.5 pt-3.5 mb-0 max-w-full min-h-[1px] w-[414px] max-md:mb-2.5">
    <div className="w-full text-4xl tracking-wider leading-[62.4px] text-neutral-800">
      {title}
    </div>
    <div className="pt-2 pb-2.5 mt-1.5 w-full text-base tracking-normal leading-8 text-black">
      {description.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);
