import * as React from "react";
import { SearchInputProps } from "./types";

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  return (
    <div className="flex relative flex-col w-full text-2xl font-bold tracking-wide text-neutral-400 max-md:max-w-full">
      <form role="search">
        <label htmlFor="searchInput" className="sr-only">
          Search content
        </label>
        <div className="flex overflow-hidden z-0 flex-col justify-center py-6 pr-3 w-full bg-white border-b-4 border-solid border-b-neutral-800 min-h-[75px] max-md:max-w-full">
          <input
            id="searchInput"
            type="search"
            placeholder="Start typing..."
            onChange={(e) => onSearch(e.target.value)}
            className="overflow-hidden w-full max-md:max-w-full bg-transparent border-none outline-none"
          />
        </div>
      </form>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/6cbb6e9be2f64d1a4a42f5d0338540abca8bfaafc1de9ca6d7499085dfbe7b8e?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
        alt=""
        className="object-contain absolute right-0 top-6 bottom-7 z-0 aspect-[1.04] left-[892px] w-[23px]"
      />
    </div>
  );
};
