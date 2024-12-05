import * as React from "react";
import { ContentItem } from "./ContentItem";
import Link from "next/link";

const contentData = [
  {
    imageUrl: "/ramsha-pics/webp/gf33.webp",
    title: "Embrace Your Divine Path: Uncovering True Success with Yasmin Mogahed",
    date: "OCTOBER 29, 2024",
    href: "#"
  },
  {
    imageUrl: "/ramsha-pics/webp/gf33.webp",
    title: "Stand Out with Grace: Navigating the Market with Halima Aden",
    date: "OCTOBER 8, 2024",
    href: "#"
  },
  {
    imageUrl: "/ramsha-pics/webp/gf33.webp",
    title: "Finding Meaning and Joy: A Journey with Amani Al-Khatahtbeh",
    date: "OCTOBER 1, 2024",
    href: "#"
  },
];

export const LatestContent: React.FC = () => {
  return (
    <section className="bg-[#FFF5F5] py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="text-center mb-11">
          <span className="text-xs font-bold tracking-[2.16px] uppercase text-[#D4502B]">
            Discover the Latest Insights in...
          </span>
        </div>

        {/* Title and View All */}
        <div className="flex justify-between items-center border-t border-[#D4502B] pt-4 pb-12">
          <h2 className="font-display text-[68px] leading-none text-[#D4502B]">
            Spiritual Growth & Empowerment
          </h2>
          <Link 
            href="#" 
            className="text-xs font-bold tracking-[2.4px] uppercase hover:opacity-70 transition-opacity flex items-center gap-2 text-[#D4502B]"
          >
            EXPLORE ALL <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentData.map((item, index) => (
            <ContentItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
