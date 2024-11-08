


import React from "react";

interface NavigationItem {
  title: string;
  items?: string[];
}

interface NavigationSectionProps {
  data: NavigationItem;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      <div className="flex flex-col w-full max-md:text-center">
        <h3 className=" pb-6 font-bold  max-md:text-center font-sans-template">
          {data.title}
        </h3>
        {data.items && data.items.map((item, index) => (
          <div key={index} className="flex flex-col pb-6 font-sans-template">
            <a href="#">{item}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationSection;
