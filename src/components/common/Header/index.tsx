/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Logo from "./Logo";
import Navigation, { navItems } from "./Navigation";
import FreeTrainingButton from "./FreeTrainingButton";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#0A4049] sticky top-0 z-50 flex flex-col pb-px border-b border-solid border-b-zinc-400 w-full max-lg:py-5">
      <div className="grid grid-cols-8 items-center px-7 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="uppercase text-2xl font-seasons text-[#e09453] whitespace-nowrap">
          Glowing Femme
        </h1>
        {/* Desktop Navigation */}
        <div className="text-[#F8E8D8] col-start-2 lg:col-start-3 col-span-4 flex justify-center items-center max-lg:hidden">
          <Navigation />
        </div>
        <div className="col-start-8 flex justify-end items-center max-lg:hidden">
          <FreeTrainingButton />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden col-start-8 flex justify-end">
          <Sheet>
            <SheetTrigger>
              <AlignJustify className="h-6 w-6 text-[#F8E8D8]" />
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full p-0 bg-[#FDF7F4] mt-[65px]"
            >
              {/* Top Banner */}
              <div className="flex justify-center md:justify-between items-center px-6 py-4 bg-[#F8E8D8]">
                <div className="flex items-center gap-1 hidden md:flex">
                  <span className="text-base">How to Get Your Prayers Answered Instantly</span>
                  <span className="px-2">→</span>
                </div>
                <FreeTrainingButton />
              </div>

              {/* Navigation Menu */}
              <div className="px-6 py-6">
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href || `/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="py-4 border-b border-[#00000033] text-base"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
