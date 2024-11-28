import React from "react";
import Header from "./Header";
import BottomBar from "@/components/common/BottomBar";
import Form from "./Form";
import ImageSection from "./ImageSection";

export default function Component() {
  return (
    <section className="font-montserrat">
      <section className="flex flex-col items-center bg-ramsha-accent border-ramsha-accent m-4 border-[10px] xl:px-[10px] xl:pt-[56px] xl:pb-[54px] px-[0px] pt-[45px] pb-[55px] rounded-[30px]">
        <div className="flex lg:flex-row flex-col items-start pb-8 max-w-full">
          <section className="flex flex-col flex-1 shrink pt-4 text-black px-10">
            <Header />
            <Form />
          </section>
          <ImageSection />
        </div>
      </section>
      <BottomBar />
    </section>
  );
}
