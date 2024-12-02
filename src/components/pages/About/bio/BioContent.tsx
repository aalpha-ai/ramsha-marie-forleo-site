import * as React from "react";
import { TextBlock } from "./components/TextBlock";
import { LinkText } from "./components/LinkText";
import { BioSection } from "./components/BioSection";

export const BioContent: React.FC = () => {
  const bioSections = [
    {
      text: "Want to build a business but don't have an MBA, a fat bank account, or a clue where to start? I'll give you the",
      link: {
        href: "https://www.marieforleo.com/marietv",
        text: "roadmap",
      },
      additionalText: " to your dream business.",
    },
    {
      text: "Have ideas, creations, and gifts to share with the world, but can't seem to get people to pay attention? I'll help you find your",
      link: {
        href: "https://www.marieforleo.com/the-copy-cure",
        text: "voice",
      },
      additionalText: " and get results.",
    },
    {
      text: "Crave more freedom, flexibility, and joy in your life — but can't seem to escape toxic overwork and overwhelm? I'll show you the",
      link: {
        href: "https://www.marieforleo.com/time-genius",
        text: "path",
      },
      additionalText: " to time freedom.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-20 pt-20 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-9 w-full max-w-[850px] max-md:max-w-full">
          <TextBlock content="A born-and-raised Jersey girl with nothing more than passion, a laptop and a dream, I'm proud to have created a digital empire that touches millions." />

          <div className="flex flex-wrap gap-3 mt-4 w-full text-base tracking-normal max-w-[810px] max-md:max-w-full">
            <div className="grow self-start leading-8 text-black">
              Through our award-winning show{" "}
            </div>
            <div className="flex gap-1">
              <LinkText
                href="https://www.marieforleo.com/marietv"
                text="MarieTV"
              />
              <div className="self-start leading-8 text-black">and </div>
            </div>
            <div className="flex gap-1 font-bold max-md:max-w-full">
              <LinkText
                href="https://www.marieforleo.com/podcast"
                text="The Marie Forleo Podcast,"
              />
              <div className="self-start leading-8 text-black basis-auto">
                world-class online training
              </div>
            </div>
          </div>

          <div className="flex overflow-hidden flex-col pb-3 pl-9 mt-4 text-base tracking-normal leading-8 max-md:pl-5 max-md:max-w-full">
            {bioSections.map((section, index) => (
              <BioSection
                key={index}
                text={section.text}
                link={section.link}
                additionalText={section.additionalText}
              />
            ))}
          </div>

          <div className="mt-0 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                <div className="self-stretch my-auto mr-0 text-5xl tracking-wider leading-[62.4px] text-neutral-800 max-md:mt-10 max-md:max-w-full">
                  "Everything is
                  <br />
                  Figureoutable."
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/8174ab6bbbbfb58ceab6a048e2e55492f8401d2fd475a76a162ff341fd04e1c8?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
                    alt="Marie Forleo portrait"
                    className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[0.83] basis-0 max-w-[850px] min-w-[240px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <TextBlock
            content="Meaning, there is nothing in life that you can't experience, achieve, transform or transcend  -—  as long as you're willing to roll up your sleeves, get in there, and go for it."
            className="mt-4"
          />

          <div className="flex flex-wrap gap-6 mt-4 w-full text-base tracking-normal max-w-[792px] max-md:max-w-full">
            <div className="flex-auto self-start leading-8 text-black">
              "Everything is Figureoutable" is not only the title of my{" "}
            </div>
            <div className="flex flex-auto gap-0.5">
              <LinkText
                href="https://everythingisfigureoutable.com/eif-a"
                text="#1 New York Times bestselling book"
              />
              <div className="self-start leading-8 text-black">. It's the</div>
            </div>
          </div>

          <TextBlock
            content="mantra I live by, and the key to a joyful, prosperous, freedom-rich life."
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};
