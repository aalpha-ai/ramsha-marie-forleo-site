import React from "react";
import NavigationSection from "./Navigation/NavigationSection";

const navigationData = {
  items: ["One on One", "Blog", "Shop", "Contact", "Legal", "404"],
};

const Footer: React.FC = () => {
  return (
    <footer className="font-sans-template flex justify-center items-center py-7 mt-24 w-full min-h-[72px] sm:px-5 lg:px-20">
      <div className="flex flex-col w-full max-w-[1400px] min-w-[240px]">
        <div className="flex flex-col sm:flex-row justify-between items-stretch w-full">
          <nav className="w-full sm:w-auto flex flex-wrap sm:flex-nowrap justify-start sm:justify-end items-start sm:items-center text-base leading-none text-zinc-800 mb-6 sm:mb-0">
            <NavigationSection data={navigationData} />
          </nav>
          <p className="flex items-center justify-center text-sm leading-none text-zinc-800 mt-auto sm:mt-0 pt-6 sm:pt-0 w-full sm:w-auto">
            Designed and developed by
            <a href="#" className="underline whitespace-nowrap ml-1">
              aalpha.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
