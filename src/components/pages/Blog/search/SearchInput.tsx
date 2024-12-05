import * as React from "react";
import { SearchInputProps } from "./types";

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Start typing..."
        className="w-full py-6 text-[32px] text-neutral-900 placeholder:text-neutral-400/60 focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-neutral-900"
        >
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
