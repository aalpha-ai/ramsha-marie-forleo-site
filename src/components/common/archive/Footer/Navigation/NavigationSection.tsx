import React from "react";

interface NavigationItem {
  title?: string;
  items: string[];
}

interface NavigationSectionProps {
  data: NavigationItem;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-3 w-full max-w-sm md:flex md:flex-row md:max-w-none md:justify-between lg:gap-4">
        {data.items && data.items.map((item, index) => (
          <div key={index} className="flex justify-center pb-4 md:pb-6 font-sans-template">
            <a href="#" className="font-bold">{item}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationSection;
