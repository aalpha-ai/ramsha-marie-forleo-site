import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import React from "react";
import { BlogLayout } from "./blog/index";
import { LatestContent } from "./latestContent/LatestContent";
import { Collections } from "./collections";
import { PersonalGrowthArticle } from "./personalGrowth";
import { SearchPage } from "./search";

export default function Component() {
  return (
    <div className="font-body text-[16px] bg-gray-50">
      <Header />
      <PersonalGrowthArticle />
      <BlogLayout />
      <Collections />
      <LatestContent />
      <SearchPage />
      <Footer />
    </div>
  );
}
