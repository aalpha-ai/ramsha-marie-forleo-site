import React from "react";

const MainContent: React.FC = () => {
  return (
    <main className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:text-center text-2xl leading-7 text-zinc-800 max-md:mt-10">
            <p className="font-header-template pb-px w-full text-2xl leading-7 text-zinc-800">
              Welcome, I&apos;m here to guide you on a transformative journey with personalized coaching
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
