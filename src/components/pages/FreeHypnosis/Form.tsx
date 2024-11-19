/**
 * This code was generated by Builder.io
 */
import React from "react";
import { ChevronsRight } from 'lucide-react';

const Form: React.FC = () => {
  return (
    <form className="flex flex-col w-full px-2">
      <div className="flex flex-col pt-4 mt-1.5 w-full text-base font-bold text-neutral-500 max-md:max-w-full">
        <label htmlFor="firstName" className="sr-only">
          First name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="First name"
          className="flex overflow-hidden justify-center items-start px-5 pt-3.5 pb-4 bg-white border border-solid border-black border-opacity-20 max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col pt-1.5 mt-1.5 w-full text-base font-bold whitespace-nowrap text-neutral-500 max-md:max-w-full">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="flex overflow-hidden justify-center items-start px-5 pt-3.5 pb-4 bg-white border border-solid border-black border-opacity-20 max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col pt-1.5 mt-1.5 w-full md:text-[18px] text-[16px] text-center text-white uppercase tracking-[2px] max-md:max-w-full">
        <button
          type="submit"
          className="flex flex-row justify-center items-center px-[25px] py-[15px] bg-orange-600 rounded-[60px] max-md:max-w-full"
        >
          <span className="uppercase self-stretch my-auto font-bold min-[375px]:whitespace-nowrap">
            Get My Free Download
          </span>
          <ChevronsRight />
        </button>
      </div>
      <div className="flex justify-center pt-1.5 w-full text-xs tracking-normal leading-5 text-center max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col px-3 py-1 w-full max-md:max-w-full">
            <p className="text-black max-md:max-w-full">
              By entering your email, you&apos;ll agree to join Glowing Femme for FREE
              access to exclusive insights and offers delivered with love to your inbox.
              (Unsub anytime in a click.) You also agree to our{" "}
              <a href="/terms" className="text-orange-700 underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="self-stretch underline text-orange-700">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
