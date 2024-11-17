/**
 * This code was generated by Builder.io.
 */
import React from "react";

const FormDisclaimer: React.FC = () => {
  return (
    <div className="flex justify-center pt-1.5 w-full text-xs tracking-normal leading-5 text-center max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col px-3 py-1 w-full max-md:max-w-full">
          <p className="text-black max-md:max-w-full">
            By entering your email, you&apos;ll agree to join Glowing Femme for FREE
            access to exclusive insights and offers delivered with love to your inbox.
            (Unsub anytime in a click.) You also agree to our{" "}
            {/* By entering your info, you&apos;ll become an MF Insider – with FREE
            access to exclusive insights, private Q+As, and inspiring episodes
            of MarieTV, delivered with 💜 to your inbox. (Unsub anytime in a
            click.) You also agree to our{" "} */}
            <a href="/terms" className="text-orange-700 underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="https://docs.google.com/document/d/1NX_pfSdmWr6l8_oqT6nJErocC4Y--Ru4qUaW6dk6EVw/edit?usp=sharing" className="self-stretch underline text-orange-700">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormDisclaimer;
