


import React from "react";
import NavigationSection from "@/components/common/Footer/Navigation/NavigationSection";

const navigationData = [
  {
    title: "Homepages",
    items: ["Home V1", "Home V2", "Home V3"],
  },
  {
    title: "About",
    items: ["About V1", "About V2", "About V3"],
  },
  {
    title: "Blog",
    items: ["Overview", "Category", "Detailed"],
  },
  {
    title: "Others",
    items: [
      "Contact V1",
      "Contact V2",
      "Contact V3",
      "Pricing",
      "Style Guide",
      "Licensing",
      "Changelog",
      "Legal",
      "404",
    ],
  },
];

const MainContent: React.FC = () => {
  return (
    <main className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:text-center text-2xl leading-7 text-zinc-800 max-md:mt-10">
            <p className="pb-px w-full">
              Hey, I&apos;m Maria Gonzalez and I{" "}
              <br className="hidden md:block" />
              offer life coaching of the future{" "}
              <br className="hidden md:block" />
              with personalized plan to achieve{" "}
              <br className="hidden md:block" />
              innner balance.
            </p>
          </div>
        </section>
        <nav className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex items-start  max-md:flex-col gap-10 text-base leading-none text-zinc-800 max-md:mt-10 max-md:max-w-full">
            {navigationData.map((section, index) => (
              <NavigationSection key={index} data={section} />
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
};

export default MainContent;
