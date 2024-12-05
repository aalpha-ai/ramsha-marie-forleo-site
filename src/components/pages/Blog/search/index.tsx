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
    <div className="w-full container mx-auto px-6 md:px-14 py-20 bg-white">
      {/* Header Section */}
      <div className="mx-auto text-center">
        <h1 className="font-header text-[48px] leading-[1.05] tracking-[-0.02em] text-neutral-900 mb-6">
          What Divine Wisdom Are You Seeking?
        </h1>
        <p className="text-[#D4502B] text-lg mb-14 font-light">
          Explore our sacred collection of spiritual teachings and feminine wisdom
        </p>
        <div className="relative max-w-2xl mx-auto">
          <SearchInput onSearch={handleSearch} />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C27C6F]" />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="mt-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="group">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>

      {/* No Results Message - Optional */}
      <div className="text-center mt-16 hidden">
        <h2 className="text-2xl font-display mb-4">
          Your Journey Leads Elsewhere
        </h2>
        <p className="text-neutral-600 mb-8">
          We couldn't find what you're looking for, but perhaps that's Allah's way
        </p>
      </div>
    </div>
  );
};
