import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center px-16 text-base tracking-normal leading-7 text-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pt-8 pb-4 w-full max-w-3xl mx-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/bc4dbb5c559fd9cad20d7b36ec14589d9edba8776b4987fbab409c73bb655eaa?apiKey=48a1608e30b648c89bd5ed134a49b3b8&"
          alt="Dream Club visual representation"
          className="object-contain aspect-[9.9]  max-md:max-w-full"
        />
        <h1 className="mt-11 text-2xl font-bold tracking-wide leading-8 text-neutral-800 ">
          <span className="text-neutral-800">Coaching</span>
          <span className="font-light text-neutral-800"> & </span>
          <span className="text-neutral-800">Community</span>
          <span className="font-light text-neutral-800"> With </span>
          <span className="text-neutral-800">Marie Forleo</span>
        </h1>
        <p className="px-1 mt-6 font-light max-md:max-w-full">
          Dream Club isn&apos;t just another business program. It&apos;s a{" "}
          <span className="font-bold text-black">lifestyle revolution</span> for
          creatives who want a bespoke and unique experience of success.
        </p>
        <p className="px-44 mt-4 font-light max-md:px-5 max-md:max-w-full">
          It&apos;s for those who want more joy, profit, and freedom.
        </p>
      </div>
    </header>
  );
};

export default Header;
