/**
 * This code was generated by Builder.io
 */
import React from "react";
import { QuestionItem, QuestionItemProps } from "./QuestionItem";
import { NotForYouItem, NotForYouItemProps } from "./NotForYouItem";
import BlurFade from "@/components/magicui/blur-fade";

interface DreamClubPitchProps {
  questions: QuestionItemProps[];
  notForYouItems: NotForYouItemProps[];
}

const DreamClubPitch: React.FC<DreamClubPitchProps> = ({
  questions,
  notForYouItems,
}) => {
  return (
    <section className="flex flex-col items-center bg-landing-stone-pattern">
      <div className="flex flex-col px-14 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="w-full text-5xl leading-[62.4px] text-neutral-800 max-md:px-5 max-md:max-w-full">
            Is Somatic Healing Right for Your Journey?
          </h2>
          <div className="flex flex-col mt-6 w-full text-base tracking-normal text-black max-md:max-w-full">
            <p className="w-full font-light leading-7 max-md:px-5 max-md:max-w-full">
              Alhamdulillah, we serve ambitious Muslim women - from entrepreneurs and professionals 
              to coaches and creatives - who are ready to embrace their divine feminine essence 
              while building success that honors both deen and dunya.
            </p>
            <p className="mt-4 w-full italic font-light leading-6 max-md:max-w-full">
              <span className="text-black">
                Take a moment for reflection. Is this sacred journey right for{" "}
              </span>
              <span className="italic text-black">your</span>
              <span className="text-black">
                {" "}
                soul's expansion? Consider these questions, bi'ithnillah...
              </span>
            </p>
          </div>
        </div>
        <div className="py-8 w-full max-w-[830px] mx-auto max-md:max-w-full">
          <BlurFade>
            <div className="flex flex-col flex-1 px-10 py-8 w-full rounded-2xl border border-black border-solid bg-stone-50 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col pb-4 w-full max-md:max-w-full">
                {questions.map((question, index) => (
                  <QuestionItem key={index} {...question} />
                ))}
              </div>
              <h4 className="flex flex-col pb-2 w-full text-2xl font-bold tracking-wide leading-8 text-center text-neutral-800 max-md:max-w-full">
                <div className="px-9 max-md:px-5 max-md:max-w-full">
                  If you answered yes to 3 or more, Allah has guided you to this transformation.
                </div>
              </h4>
            </div>
          </BlurFade>
        </div>

        <div className="flex flex-col items-center self-start pr-16 pl-16 max-md:px-0 max-md:max-w-full max-w-3xl mx-auto">
          <div className="flex flex-col self-center pb-4 text-lg font-light tracking-normal leading-8 text-center text-black">
            <p>
              <span className="text-black">This program may </span>
              <span className="font-bold text-black">NOT</span>
              <span className="text-black"> be for you if:</span>
            </p>
          </div>
          <div className="flex flex-col pb-2 max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              {notForYouItems.map((item, index) => (
                <NotForYouItem key={index} {...item} />
              ))}
            </div>
            <h4 className="px-4 mt-6 w-full text-2xl font-bold tracking-wide leading-8 text-center text-neutral-800 max-md:max-w-full">
              <span className="text-neutral-800">The Divine Truth?</span>
              <span className="font-light text-neutral-800">
                {" "}
                This sacred container is designed to help you embody your feminine power and{" "}
              </span>
              <span className="font-light text-neutral-800">
                {" "}
                manifest abundance in alignment with your spiritual truth.{" "}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamClubPitch;
