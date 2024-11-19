/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Image from "next/image";

interface EpisodeItemProps {
  number: string;
  title: string;
  imageSrc: string;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({
  number,
  title,
  imageSrc,
}) => {
  return (
    <article className=" max-md:max-w-full cursor-pointer  transition-all duration-200 ease-in-out-episode hover:pl-[1%]">
      <div className="grid grid-cols-12 items-start w-full gap-6 border-b border-solid border-b-black py-7 pr-5">
        <div className="col-span-full sm:col-span-1">
          <p className="text-xs font-extrabold  text-rose-400 font-area-extended">
            #{number}
          </p>
        </div>

        <div className="col-span-full sm:col-span-10">
          <h3 className="flex flex-col grow shrink text-3xl tracking-wider leading-10  text-neutral-800 max-sm:text-xl max-md:max-w-full font-caslon">
            {title}
          </h3>
        </div>
        <div className="max-md:hidden">
          <Image
            src={imageSrc}
            alt=""
            className="object-contain aspect-square w-full h-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </article>
  );
};

export default EpisodeItem;
