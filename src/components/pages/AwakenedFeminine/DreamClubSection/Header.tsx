import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center px-16 text-base tracking-normal leading-7 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pt-8 pb-4 w-full mx-auto">
        <h1 className="text-4xl xs:text-5xl md:text-7xl font-header tracking-widest">
          AWAKENED FEMININE
        </h1>
        <h1 className="mt-11 text-2xl font-header tracking-wide leading-8">
          <span className="">Somatic Healing</span>
          <span className="font-light"> & </span>
          <span className="">Sacred Sisterhood</span>
          <span className="font-light"> with </span>
          <span className="">Ramsha</span>
        </h1>
        <p className="px-1 mt-6 font-light max-md:max-w-full">
          Bismillah. This isn't just another healing program. It's a{" "}
          <span className="font-bold">spiritual revolution</span> for 
          Muslim women seeking to embody their divine feminine essence while 
          honoring their deen.
        </p>
        <p className="px-44 mt-4 font-light max-md:px-5 max-md:max-w-full">
          It's for those seeking deeper connection with Allah{" "}
          <span className="font-arabic">ﷻ</span>, authentic embodiment, and 
          spiritual abundance, bi'ithnillah.
        </p>
      </div>
    </header>
  );
};

export default Header;
