import * as React from "react";
import { TextBlock } from "./TextBlock";
import { ImageComponent } from "./ImageComponent";
import { InsiderForm } from "./InsiderForm";
import { TrainingCard } from "./TrainingCard";

export const WelcomeSection: React.FC = () => {
  const insiderFormData = {
    title: "Join Our Sacred\nSisterhood",
    description: [
      "Receive weekly spiritual guidance, early access to",
      "healing circles, exclusive duas and dhikr practices,",
      "plus sister-only resources to support your",
      "journey, bi'ithnillah.",
    ],
  };

  const trainingCardData = {
    title: ["Experience Our", "FREE Somatic", "Practice."],
    description: [
      "Download this blessed guided practice to discover",
      "3 gentle ways to regulate your nervous system",
      "while deepening your connection with Allah ﷻ.",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/9ad77acad7532b8892d592c5daa400bb489639dab7baec2da4e86da34e7a7e1a?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-14 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-6 w-full text-base tracking-normal leading-8 max-w-[850px] max-md:max-w-full">
          <TextBlock content="Yes, this is a healing business, Alhamdulillah. Yes, we offer premium programs. And yes, we're deeply grateful that Allah has blessed us to serve sisters through this work. But you should know that we strive to make much of our spiritual guidance and somatic practices available at no cost, seeking only Allah's pleasure." />

          <div className="flex flex-col max-w-full font-bold text-orange-700 w-[806px]">
            <div className="self-end">(To learn</div>
            <div className="self-start mt-5">
              more about our spiritual approach to business, click here.)
            </div>
          </div>

          <TextBlock content="I'm not a perfect teacher, and I don't claim to have all the answers. Like you, I'm on this journey of growth, facing challenges and seeking Allah's guidance. Some days are filled with light, others test our faith - this is the beautiful nature of our spiritual path." />

          <div className="flex z-10 flex-col pt-2.5 pb-9 pl-1.5 mt-0 w-full border-t border-b border-solid border-y-stone-300 max-w-[824px] max-md:max-w-full">
            <div className="flex flex-col items-start w-full max-md:pr-5">
              <InsiderForm {...insiderFormData} />
            </div>
          </div>

          <TrainingCard {...trainingCardData} />

          <div className="flex z-10 flex-col justify-center items-start mt-0 w-full max-w-[748px] max-md:max-w-full">
            <div className="flex overflow-hidden items-start max-w-full w-[115px]">
              <div className="flex overflow-hidden flex-col justify-center items-center min-h-[58px] w-[115px]">
                <ImageComponent
                  src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/a887db2766dc0644bb27ce7f45bf2f3de2dc860985b210a00fd53bf930527635?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
                  alt="Ramsha's Signature"
                  className="object-contain w-full aspect-[1.98]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
