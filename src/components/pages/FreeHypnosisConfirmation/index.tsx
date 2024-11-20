import React from "react";
import Success from "./Success";
import Footer from "../FreeHypnosisLeadMagnet/Footer";

export default function Component() {
  return (
    <section className="font-montserrat">
      <section className="flex flex-col items-center bg-ramsha-accent border-ramsha-accent m-10 border-[10px] xl:px-[10px] xl:pt-[56px] xl:pb-[54px] px-[0px] pt-[45px] pb-[55px] rounded-[30px]">
        <div className="flex flex-col items-center text-center px-8 pt-16">
          <p className="font-montserrat-bold text-ramsha-tertiary tracking-wider pb-8 text-2xl">
            AMAZING CHOICE!
          </p>
          <h1 className="text-5xl pb-12 max-w-4xl">
            You've discovered the proven path to{' '}
            <span className="font-montserrat-bold">transform your life through hypnosis.</span>
          </h1>
          <p className="text-2xl">
            Do this simple step immediately:
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-start pb-8 max-w-full">
          <Success />
        </div>
      </section>
      <Footer />
    </section>
  );
}
