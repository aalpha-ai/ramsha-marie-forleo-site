/**
 * This code was generated by Builder.io
 */
import React from "react";
import ResourceCard from "./ResourceCard";

interface Resource {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
}

const resources: Resource[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/2f23906e60fa29a9fffeb5501c64a10f496a15e88b24816723d5fb30d8582fa8?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "How to Get Anything You Want",
    description:
      "Listen to this FREE audio from Ramsha and learn the 3 steps that'll change your life, fast.",
    ctaText: "Get Free Audio Training",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/243bc2a10cf168b0a5826d1a4f5494a82b2327289058d48c84f062dfbb7ebfde?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "7 Day Free Writing Class",
    description:
      "Get quick, daily tips to write authentic, irresistible copy that connects with your audience and converts them to buyers.",
    ctaText: "Get My Free Guide",
    ctaLink: "https://ramshalovesyou.com/freewritingclass",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/1e752c0439dfa504375e0185cc1049993694f30f79498254b6e3bbafe753ee05?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "Yearly Goals Map",
    description:
      "Clarify your most important goals and let go of what's holding you back — in 10 minutes or less.",
    ctaText: "Get my Free Download",
    ctaLink: "https://ramshalovesyou.com/yearly-goals-a",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/d8871dc51ac7a2c1b25e7127ec193649f0beeebccf6b33f8f45551ca843d8a09?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "3 Toxic Lies That Keep You Overwhelmed & Underearning",
    description:
      'Feel exhausted trying to "do it all," yet it\'s never quite enough? On some level you probably believe at least one of these 3 toxic lies. Read it in an hour and watch your entire life change.',
    ctaText: "Get my Free Download",
    ctaLink: "http://jointimegenius.com/",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/8ff761070ee810ca4b43cde52e19e45425aefd85382983ec047355bc9fa3a402?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "Discover Your Winning Business Idea",
    description:
      "Want to start a business, but have no clue what to start? Or have a million ideas, but don't know whether they'll work? This simple tool will help you find your winning idea — one that's highly profitable AND enjoyable.",
    ctaText: "Get my Free Download",
    ctaLink: "https://ramshalovesyou.com/bizidea",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/56d7856f47f9782cffb06a57115200f7a04e64573a9cfa5df999dbb00b59196e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "5-Minute Stress Relief Log",
    description:
      "Stress got you spinning? This exercise will help you get out of your head and into action mode so you can focus on what matters — and feel better, fast.",
    ctaText: "Get my Free Download",
    ctaLink: "https://ramshalovesyou.com/stresslog",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/4dea9e1aa30835edf744ce53b45ebc72179ad68f7b2bcf87676b921f2c2e4dc7?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "322+ FREE Business Tools & Resources",
    description:
      "There's never been a better time to start a business. These 322+ business tools will help you plan, design, market, and manage your way to success — all 100% FREE.",
    ctaText: "Get My Free Guide",
    ctaLink: "https://ramshasuhailbschool.com/free-business-tools",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/27262ec3d0e84a5cb91de9806654ed8b5ca405074929a7d7707d7f0b7d9b9234?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    title: "The Ultimate Guide to Saying No",
    description:
      "19 different ways to say no with kindness and class (word-for-word scripts included).",
    ctaText: "Get my Free Download",
    ctaLink: "https://www.ramshasuhail.com/blog/how-to-say-no-ultimate-guide",
  },
];

const FreeResourcesGrid: React.FC = () => {
  return (
    <section className="bg-white pt-[64px] md:pt-[80px] xl:pt-[95px] xl:px-[40px] xl:mx-[120px] lg:px-[54px] md:px-[54px] px-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  );
};

export default FreeResourcesGrid;
