/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from "next/image";

interface SectionContentProps {
  title: string;
  subtitle?: string;
  content: string;
  additionalInfo?: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export const SectionContent: React.FC<SectionContentProps> = ({
  title,
  subtitle,
  content,
  additionalInfo,
  imageSrc,
  children,
  imageAlt,
}) => {
  return (
    <div className="grid md:grid-cols-2 items-center p-4 md:p-10 gap-10">
      <div className="max-md:px-3">
        <div className="flex flex-col max-w-full text-xl font-light tracking-wide leading-8 text-neutral-800 ">
          <div className="flex flex-col items-center ">
            <h3 className="text-2xl font-bold font-montserrat-bold">{title}</h3>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
        <div className="flex flex-col max-w-full text-base font-light tracking-normal ">
          <div className="flex flex-col w-full">
            <p className="w-full italic leading-7">{content}</p>
            {additionalInfo && (
              <div className="flex flex-col items-center  mt-4 w-full leading-6">
                <p className="italic">{additionalInfo}</p>
              </div>
            )}
          </div>
        </div>
        {children}
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="object-cover w-full max-h-[593px]"
        height={593}
        width={200}
      />
    </div>
  );
};
