import * as React from "react";
import { TextBlock } from "./TextBlock";
import { ImageComponent } from "./ImageComponent";
import { InsiderForm } from "./InsiderForm";
import { TrainingCard } from "./TrainingCard";

export const WelcomeSection: React.FC = () => {
  const insiderFormData = {
    title: "Become an MF\nInsider",
    description: [
      "You'll get weekly motivation and first dibs on",
      "scholarship seats, giveaways and other",
      "subscriber-only resources you can't get",
      "anywhere else.",
    ],
  };

  const trainingCardData = {
    title: ["You're Going to", "LOVE this Free", "Training."],
    description: [
      "Download this FREE audio training to learn 3",
      "simple strategies that'll give you the clarity and",
      "confidence to build your dreams, on your terms.",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/9ad77acad7532b8892d592c5daa400bb489639dab7baec2da4e86da34e7a7e1a?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-14 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-6 w-full text-base tracking-normal leading-8 max-w-[850px] max-md:max-w-full">
          <TextBlock content="Yes, this is a business. Yes, we sell things. Yes, we're proud and deeply grateful to earn a living doing so. But you should know the vast majority of our creative work is offered to you 100% free of charge." />

          <div className="flex flex-col max-w-full font-bold text-orange-700 w-[806px]">
            <div className="self-end">(For</div>
            <div className="self-start mt-5">
              more on how my company rolls, read this.)
            </div>
          </div>

          <TextBlock content="I'm no sage from the stage and I don't have all the answers. I make mistakes, have shitastic days and get mired in fear and self-doubt, just like the rest of humanity." />

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
                  alt="Signature"
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
