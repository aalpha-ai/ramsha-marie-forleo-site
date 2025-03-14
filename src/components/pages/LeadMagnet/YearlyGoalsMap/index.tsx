/**
 * This code was generated by Builder.io
 */
import React from "react";
import Header from "./Header";
import Form from "./Form";
import ImageSection from "./ImageSection";

const YearlyGoalsMap: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-white border-red-200 border-solid border-[10px] xl:px-[10px] xl:pt-[56px] xl:pb-[54px] px-[0px] pt-[45px] pb-[55px]">
      <div className="flex lg:flex-row flex-col items-start px-2.5 pb-8 max-w-full">
        <section className="flex flex-col flex-1 shrink pt-4 text-black">
          <Header />
          <Form />
        </section>
        <ImageSection />
      </div>
    </section>
  );
};

export default YearlyGoalsMap;
