/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from 'next/image';

interface QuizCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  buttonText: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  buttonText,
}) => {
  return (
    <div className="relative mb-[50px]">
      {/* Shadow Layer */}
      <div className="absolute inset-0 bg-rose-200 translate-x-2 translate-y-2"></div>
      
      <section className="relative flex items-center gap-16 py-16 px-[14px] lg:px-16 w-full bg-rose-50 max-md:flex-col max-md:px-6">
        <div className="w-[220px] lg:w-1/3">
          <Image
            src={imageSrc}
            alt=""
            className="w-full object-cover"
            width={220}
            height={150}
          />
        </div>
        
        <div className="flex flex-col flex-1 w-full md:max-w-[600px] max-md:max-w-full md:w-2/3">
          <h2 className="text-sm font-extrabold uppercase tracking-[2.16px] text-neutral-800 text-center md:text-left">
            Free Quiz
          </h2>
          <h3 className="mt-4 text-[27px] md:text-[21px] lg:text-[36px] xl:text-[40px] leading-[1.2] tracking-wide font-[600] font-header text-center md:text-left">
            {title}
          </h3>
          <p className="mt-6 md:text-[16px] text-lg leading-relaxed text-neutral-800 text-center md:text-left">
            {description}
          </p>
          <button className="md:text-[16px] py-[12px] px-[25px] md:w-[300px] text-[16px] w-[315px] mt-8 font-bold text-white bg-neutral-800 rounded-full w-fit max-md:w-full">
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default QuizCard;
