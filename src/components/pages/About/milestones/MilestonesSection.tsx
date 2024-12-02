import * as React from "react";
import { MilestoneCard } from "./MilestoneCard";

const milestoneData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/65b1f8e78f412f56ace515e205aeac984f14f91b3032b8960835e6472e79aaad?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    imageAlt: "Virgin Unite mentorship program",
    title: "Virgin unite",
    description: (
      <div className="text-black">
        Sir Richard Branson invited me to
        <br />
        South Africa to mentor young
        <br />
        entrepreneurs at his Centre for
        <br />
        Entrepreneurship.
      </div>
    ),
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/0c97065a6d8df97efaeced236a41749ce6d98fe215daaf91e87d0c9bd8c68010?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    imageAlt: "Super Soul Sunday appearance",
    title: "Super soul sunday",
    description: (
      <>
        <div className="text-black">
          Oprah had me on her Emmy
          <br />
          Award-winning TV show Super
          <br />
          Soul Sunday as a thought leader
          <br />
          for the next generation. A few
          <br />
          years later
        </div>
        <div className="flex flex-col py-0.5 pr-1.5 max-w-full font-bold text-orange-700 w-[246px]">
          <div className="self-center ml-4">I spoke at her</div>
          <div className="mt-5">
            incredible SuperSoul Sessions
            <br />
            event.
          </div>
        </div>
      </>
    ),
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/81d2b8f734d1af2347cc03ef2c2914f11ed8e93be76099c20dcad061c938dda3?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    imageAlt: "The Today Show appearance",
    title: "The Today Show",
    description: (
      <>
        <div className="text-black">
          I had a fantastic time chatting with
          <br />
          Hoda and Meredith about my
          <br />
          book,{" "}
        </div>
        <div className="z-10 self-end -mt-4 mb-0 font-bold leading-8 text-orange-700 max-md:mr-2 max-md:mb-2.5">
          <a
            href="http://everythingisfigureoutable.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Everything is Figureoutable.
          </a>
        </div>
      </>
    ),
  },
];

export const MilestonesSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-14 pt-20 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pt-12 pb-6 max-w-full text-base tracking-normal leading-8 text-black w-[850px]">
          <div className="w-full text-4xl tracking-wider leading-[62.4px] text-neutral-800 max-md:max-w-full">
            I believe you must bring your whole self to
            <br />
            the table if you want to thrive in today's
            <br />
            world.
          </div>
          <div className="pt-2 mt-8 w-full max-md:max-w-full">
            That includes your unique set of gifts, your personality, your sense
            of humor and most importantly, your
            <br />
            heart. I believe that whether you run your own business or not, a
            creative and entrepreneurial approach is
            <br />
            critical to fully blossom in the modern world and to experience the
            happiness and fulfillment you deserve.
          </div>
          <div className="pt-2 mt-8 w-full max-md:max-w-full">
            No matter what your dreams or obstacles, you have the power to
            change your life and, by doing so, you'll
            <br />
            change the world.
          </div>
          <div className="pt-2 pb-2.5 mt-8 w-full max-md:max-w-full">
            This philosophy, a dogged amount of hard-work and a discernible
            amount of grace have lead to some
            <br />
            wonderful milestones. For instance:
          </div>
        </div>
        <div className="flex flex-wrap gap-9 justify-center self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {milestoneData.map((milestone, index) => (
            <MilestoneCard key={index} {...milestone} />
          ))}
        </div>
        <div className="flex flex-col pt-8 pb-8 mt-12 max-w-full text-4xl tracking-wider leading-[62.4px] text-neutral-800 w-[850px] max-md:mt-10">
          <div className="w-full max-md:max-w-full">
            From these folks and many others, I<br />
            continue to learn new things each day and
            <br />
            expand my own ideas about what it means
            <br />
            to live a fully creative and meaningful life.
          </div>
        </div>
      </div>
    </div>
  );
};
