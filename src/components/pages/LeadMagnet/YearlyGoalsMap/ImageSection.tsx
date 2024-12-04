/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from "next/image";

const ImageSection: React.FC = () => {
  return (
    <section className="flex flex-col flex-1 pt-8 lg:pt-12 mx-auto">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
          <Image
            src="/ramsha-pics/webp/gf5925.webp"
            alt="Yearly Goals Map preview"
            className="object-contain w-full aspect-[0.77] max-w-[422px] max-md:max-w-full"
            width={422}
            height={326}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
