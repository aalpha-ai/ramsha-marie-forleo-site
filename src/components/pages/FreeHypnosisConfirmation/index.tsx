import React from "react";
import Header from "../FreeHypnosisLeadMagnet/Header";
import Footer from "../FreeHypnosisLeadMagnet/Footer";
import ImageSection from "../FreeHypnosisLeadMagnet/ImageSection";
import Success from "./Success";

export default function Component() {
  return (
    <section>
      <section className="flex flex-col items-center bg-ramsha-accent border-ramsha-accent m-4 border-[10px] xl:px-[10px] xl:pt-[56px] xl:pb-[54px] px-[0px] pt-[45px] pb-[55px] rounded-[30px]">
        <div className="flex lg:flex-row flex-col items-start pb-8 max-w-full">
          <Success />
        </div>
      </section>
      <Footer />
    </section>
  );
}
