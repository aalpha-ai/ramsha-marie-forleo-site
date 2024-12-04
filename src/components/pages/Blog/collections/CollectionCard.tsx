import * as React from "react";
import { CollectionCardProps } from "./types";

export const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  paddingTop,
}) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center pb-6 text-base font-extrabold tracking-widest leading-5 text-center text-white uppercase min-h-[389px]">
        <div className="flex flex-col px-3.5 w-full min-h-[366px]">
          <div className="flex flex-1 justify-center max-w-[234px] min-h-[360px] size-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0">
              <div
                className={`flex flex-col px-8 ${paddingTop} pb-8 rounded-2xl max-md:px-5 max-md:pt-24`}
              >
                <div className="px-1.5">
                  {title.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < title.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
