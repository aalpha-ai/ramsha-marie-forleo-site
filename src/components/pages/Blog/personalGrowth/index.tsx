import * as React from "react";
import { MediaIcon } from "./MediaIcon";
import { Badge } from "./Badge";

export const PersonalGrowthArticle: React.FC = () => {
  const mediaTypes = [
    {
      type: "video" as const,
      icon: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/ab5222e940bbe050dea6cdcf307adbc14600540b27efcc92ea85cb083ce8e3e0?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    },
    {
      type: "audio" as const,
      icon: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/2e71e592022c63885d536c842b3960a9c0cba627025aaaa65f9366f50278d38d?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-14 pt-16 pb-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-8 w-full max-md:max-w-full">
          <div className="flex flex-wrap pb-9 max-w-full w-[912px]">
            <div className="flex flex-col flex-1 shrink px-1 w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex flex-wrap w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink pr-16 font-extrabold basis-0 min-h-[1px] min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col py-px w-full">
                    <div className="flex items-start self-start pt-1 text-xs leading-loose text-orange-700 uppercase tracking-[2.16px]">
                      Personal Growth
                    </div>
                    <h1 className="flex justify-center items-start pt-3.5 pb-2.5 text-5xl tracking-wide leading-[68px] text-neutral-800 max-md:mr-0.5 max-md:text-4xl max-md:leading-[66px]">
                      <div className="flex-1 shrink w-full min-w-[240px] max-md:text-4xl max-md:leading-[66px]">
                        Why Everything
                        <br />
                        You Know About
                        <br />
                        Success &<br />
                        Productivity Is
                        <br />
                        Wrong with Seth
                        <br />
                        Godin
                      </div>
                    </h1>
                    <div className="pb-px mt-1 text-xs tracking-widest leading-4 uppercase text-neutral-500">
                      October 29, 2024
                    </div>
                    <div className="flex gap-4 items-start mt-3 w-full text-xs tracking-widest leading-loose uppercase whitespace-nowrap text-neutral-800">
                      {mediaTypes.map((media) => (
                        <MediaIcon key={media.type} {...media} />
                      ))}
                    </div>
                    <button className="overflow-hidden px-20 pt-2.5 pb-3 mt-5 max-w-full text-base font-bold tracking-wide leading-relaxed text-center text-black capitalize rounded-3xl shadow-sm bg-stone-300 w-[300px] max-md:px-5">
                      Continue Reading
                    </button>
                  </div>
                </div>
                <div className="flex relative flex-col flex-1 shrink basis-16 min-h-[1px] min-w-[240px] max-md:max-w-full">
                  <div className="flex z-0 flex-col w-full max-w-[452px] max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col justify-center w-full max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/e2723b70ba45149fd7849cd56a8803cbcfa2bb7ac4766c10915b6d908d00bfc0?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
                        alt="Seth Godin discussing success and productivity"
                        className="object-contain w-full aspect-[1.54] max-md:max-w-full"
                      />
                    </div>
                  </div>
                  <Badge
                    text="New!"
                    className="absolute bottom-[551px] left-[378px] max-w-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
