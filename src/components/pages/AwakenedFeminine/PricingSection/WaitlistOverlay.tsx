'use client'

import PrimaryButton from "@/components/common/PrimaryButton";
import React, { useState } from "react";
import Waitlist from "@/components/common/WaitlistForm";

const WaitlistOverlay: React.FC = () => {
  const [triggerWaitlist, setTriggerWaitlist] = useState(false);

  return (
    <div className="h-full absolute inset-0 z-0 py-80 w-full text-center text-orange-50 bg-neutral-900 bg-opacity-80 max-md:py-24 max-md:max-w-full">
      <div className="font-header flex flex-col justify-center items-center h-full mb-0 w-full max-md:px-5 max-md:mb-2.5 max-md:max-w-full max-w-md mx-auto">
        <h2 className="font-subheader w-full text-xs font-extrabold leading-5 uppercase tracking-[2.16px] max-md:px-5 max-md:max-w-full">
          Current Cohort Full, Alhamdulillah!
        </h2>
        <h3 className="mt-3 w-full text-4xl leading-[62.4px] max-md:max-w-full">
          Next Journey Begins Soon
        </h3>
        <p className="font-subheader mt-2 text-sm">
          Bi'ithnillah, your transformation awaits
        </p>
        <div className="flex flex-col pt-2 mt-3 w-full text-base font-subheader leading-5 text-black uppercase tracking-[2.88px] max-md:max-w-full">
          {!triggerWaitlist && <div className="flex flex-col items-center w-full">
          <PrimaryButton text="Sign Up for the Sacred Waitlist" onClick={() => setTriggerWaitlist(true)}/>
          </div>}
          {triggerWaitlist && <div className="flex flex-col items-center">
            <Waitlist text="Sign Up for the Sacred Waitlist" />
          </div>}
        </div>
      </div>
    </div>
  );
};

export default WaitlistOverlay;
