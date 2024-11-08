import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center px-16 text-base tracking-normal leading-7 text-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pt-8 pb-4 max-w-full w-[775px]">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/bc4dbb5c559fd9cad20d7b36ec14589d9edba8776b4987fbab409c73bb655eaa?apiKey=48a1608e30b648c89bd5ed134a49b3b8&" 
          alt="Dream Club visual representation" 
          className="object-contain mr-8 ml-8 aspect-[9.9] max-w-[710px] w-[710px] max-md:mr-2.5 max-md:max-w-full" 
        />
        <h1 className="px-40 mt-11 text-2xl font-bold tracking-wide leading-8 text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <span className="text-neutral-800">Coaching</span>
          <span className="font-light text-neutral-800"> & </span>
          <span className="text-neutral-800">Community</span>
          <span className="font-light text-neutral-800"> With </span>
          <span className="text-neutral-800">Marie Forleo</span>
        </h1>
        <p className="px-1 mt-6 font-bold max-md:max-w-full">
          <span className="text-black">Dream Club isn't just another business program. It's a </span>
          <span className="font-bold text-black">lifestyle revolution</span>
          <span className="text-black"> for creatives who want a</span>
          <br />
          <span className="text-black">bespoke and unique experience of success.</span>
        </p>
        <p className="px-44 mt-4 font-light max-md:px-5 max-md:max-w-full">
          It's for those who want more joy, profit, and freedom.
        </p>
      </div>
    </header>
  );
};

export default Header;