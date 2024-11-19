


import Image from "next/image";
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="flex justify-between items-center self-stretch px-6 py-3.5 my-auto bg-zinc-800 max-w-[1240px] min-h-[48px] max-md:px-5">
      <p className="self-stretch my-auto text-base leading-none text-gray-200 font-sans-template">
        Let&apos;s call
      </p>
      <div className="flex flex-col items-start self-stretch pl-8 my-auto min-h-[1px] w-[70px]">
        <Image
          height={40}
          width={1}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/937a398e5a862563c37deb6924362b2a3cf1fa87a68373e4b025ee02e2f6d798?placeholderIfAbsent=true&apiKey=76b7c825d7b24462a7c58fd618f8eec6"
          alt="dash"
          className="object-contain aspect-[38.46] fill-gray-200 w-[38px]"
        />
      </div>
    </section>
  );
};

export default CallToAction;
