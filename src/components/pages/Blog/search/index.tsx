'use client';

import * as React from "react";
import { SearchInput } from "./SearchInput";
import { ArticleCard } from "./ArticleCard";
import { articles } from "./data";

export const SearchPage: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log("Searching:", value);
  };

  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <div className="flex flex-col px-14 pt-28 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full text-5xl tracking-wider leading-none text-neutral-800 max-md:max-w-full">
            Looking for something in particular?
          </div>
          <SearchInput onSearch={handleSearch} />
        </div>
        <div className="flex relative flex-col mt-9 w-full max-md:max-w-full">
          <div className="flex z-0 flex-col w-full max-md:max-w-full">
            <div className="flex flex-col self-center w-full max-w-[935px] max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center pb-9 min-h-[360px]">
                      <div className="flex w-full min-h-[1px]" />
                    </div>
                  </div>
                  {articles.slice(0, 2).map((article, index) => (
                    <div
                      key={index}
                      className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                    >
                      <ArticleCard {...article} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {articles.slice(2).map((article, index) => (
                    <div
                      key={index}
                      className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                    >
                      <ArticleCard {...article} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="flex flex-wrap justify-center px-2.5 w-full text-sm font-bold leading-none whitespace-nowrap text-zinc-800 max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-px py-3.5 pr-20 pl-5 rounded-sm border border-solid basis-0 bg-neutral-50 border-stone-300 min-w-[240px] size-full max-md:px-5 max-md:max-w-full">
                <div>Next</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/3b61a853068aaf68339443e44c27d667a2af4df4e1e1b7d35785f6918a223299?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
                  alt=""
                  className="object-contain shrink-0 self-start w-3 aspect-square"
                />
              </div>
            </button>
          </div>
          <div className="flex absolute inset-y-0 right-0 z-0 max-w-full min-h-[760px] w-[915px]" />
        </div>
      </div>
    </div>
  );
};
