import * as React from "react";
import { ArticleCard } from "./ArticleCard";
import { TopPickItem } from "./TopPickItem";
import { recentArticles, topPicks } from "./data";

export const BlogLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-11 pt-20 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pr-2.5 mt-0 min-h-[1px] max-md:max-w-full">
                <div className="w-full text-3xl tracking-wider leading-loose text-neutral-800 max-md:max-w-full">
                  Most Recent
                </div>
                <div className="flex flex-col pb-4 mt-4 w-full max-md:max-w-full">
                  {recentArticles.map((article, index) => (
                    <div key={index} className="mt-8 first:mt-0">
                      <ArticleCard {...article} />
                    </div>
                  ))}
                </div>
                <button className="pt-2.5 pr-24 pb-3 pl-24 mt-4 text-base font-bold tracking-wide leading-relaxed text-center text-white capitalize rounded-3xl bg-neutral-800 max-w-[300px] w-[300px] max-md:px-5">
                  Show More
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pt-10 min-h-[39px]">
                <div className="flex flex-col items-start pl-16 w-full min-h-[1px] max-md:pl-5">
                  <div className="flex justify-center items-center w-full max-w-[324px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/790d0bf1a45a8b19de43e068e1da0655c1ecbefe2305a0de3654c808abf58d20?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
                      alt="Marie and Oprah interview"
                      className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-square basis-0 max-w-[324px] min-w-[240px]"
                    />
                  </div>
                  <div className="flex justify-center items-start mt-3.5 w-full text-white max-w-[390px]">
                    <div className="flex flex-col flex-1 shrink w-full basis-0 min-h-[300px] min-w-[240px]">
                      <div className="flex flex-col px-4 pb-4 w-full min-h-[315px]">
                        <div className="flex flex-col pt-1.5 w-full text-3xl tracking-wider leading-loose">
                          <div className="w-full">Marie & Oprah</div>
                        </div>
                        <div className="flex flex-col pb-3 w-full text-xs font-extrabold leading-loose uppercase tracking-[2.16px]">
                          <div className="z-10 pb-px">Watch Now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 self-stretch px-7 pt-6 pb-8 mt-3.5 w-full bg-stone-100 max-md:px-5">
                    <div className="px-16 w-full text-3xl tracking-wider text-center leading-[49px] text-neutral-800 max-md:px-5">
                      Top Picks
                    </div>
                    <div className="flex flex-col mt-6 w-full">
                      {topPicks.map((pick, index) => (
                        <div key={index} className="mt-6 first:mt-0">
                          <TopPickItem {...pick} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
