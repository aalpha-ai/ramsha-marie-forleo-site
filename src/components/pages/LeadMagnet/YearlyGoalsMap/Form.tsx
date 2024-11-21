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
      <p className="flex flex-col items-start pt-3.5 pr-6 pb-5 pl-2.5 mt-1.5 w-full text-[10px] font-[400] leading-4 text-zinc-600 max-md:pr-5 max-md:max-w-full">
        <span>
          <span>
            By entering your info, you'll become an MF Insider – with FREE access
            to exclusive insights, private Q+As, and inspiring episodes of
            MarieTV, delivered with 💜 to your inbox.&nbsp;
          </span>
          <span className="italic">
            (Unsub anytime in a click.)&nbsp;
          </span>
          <span>
            You also agree to our &nbsp;
          </span>
          <a href="/terms-of-use" className="underline">
            Terms of Use
          </a>
          <span> and </span>
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
          <span>
          .
          </span>
        </span>
      </p>
    </form>
  );
};

export default Form;
