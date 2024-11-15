/**
 * This code was generated by Builder.io
 */
import React from "react";
import ListItem from "./ListItem";
import { ListItemProps } from "./ListItem";

interface DreamClubListProps {
  imageSrc: string;
}

const listItems: ListItemProps[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/de254eda4b272aa4a643d1eaf25f19a0703b0c515d9173c471809f621c1c999e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    text: "Financial freedom, personal freedom, and the kind of joy that turns heads",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/de254eda4b272aa4a643d1eaf25f19a0703b0c515d9173c471809f621c1c999e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    text: "A streamlined path to business growth (no burnout here!)",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/de254eda4b272aa4a643d1eaf25f19a0703b0c515d9173c471809f621c1c999e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    text: "A strong and healthy body, a loving heart, and a sharp, creative mind",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/de254eda4b272aa4a643d1eaf25f19a0703b0c515d9173c471809f621c1c999e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    text: "Support to stay on track with your most important goals, in business and life",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/de254eda4b272aa4a643d1eaf25f19a0703b0c515d9173c471809f621c1c999e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    text: "A profoundly positive place to connect, share, learn, and grow",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/de254eda4b272aa4a643d1eaf25f19a0703b0c515d9173c471809f621c1c999e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    text: "Your #DreamTeam of professionals who've got your back",
  },
];

const DreamClubList: React.FC<DreamClubListProps> = ({ imageSrc }) => {
  return (
    <section className="flex flex-wrap justify-center">
      <img
        src={imageSrc}
        alt="Dream Club visual representation"
        className="object-contain grow shrink aspect-[0.44] min-w-[240px] w-[351px] max-md:max-w-full"
      />
      <div className="flex flex-col grow shrink items-center bg-stone-50 min-w-[240px] w-[497px] max-md:max-w-full">
        <div className="flex flex-col px-12 py-20 max-w-full w-[585px] max-md:px-5">
          <div className="flex flex-col pt-5 pb-4 text-base font-light tracking-normal leading-7 text-black max-md:max-w-full">
            <h4 className="self-end w-full text-2xl italic font-light tracking-wide leading-8 text-neutral-800 max-md:max-w-full">
              <span className="text-neutral-800">
                Dream Club is a profoundly positive place{" "}
              </span>
              <br />
              <span className="text-neutral-800">where you can </span>
              <span className="font-bold text-neutral-800">
                {" "}
                achieve your BIG goals{" "}
              </span>
              <span className="text-neutral-800"> in</span>
              <br />
              <span className="text-neutral-800">business and life, </span>
              <span className="italic text-neutral-800">without </span>
              <span className="text-neutral-800">sacrificing your</span>
              <br />
              <span className="text-neutral-800">joy or health.</span>
            </h4>
            <p className="mt-2 w-full max-md:max-w-full">
              You're invited to join me, Team Forleo, and my inner circle of
              <br />
              colleagues, friends, and experts as we all build forward from
              <br />
              where we are today, to where we want to be. Together, we'll
              <br />
              hit new levels of wealth, joy, and freedom.
            </p>
            <p className="pt-2 mt-2 w-full max-md:max-w-full">
              Dream Club provides the mindsets, strategies, and support
              <br />
              you need to create…
            </p>
          </div>
          <div className="flex flex-col pb-2.5 max-md:max-w-full">
            <ul className="flex flex-col pb-4 w-full max-md:max-w-full">
              {listItems.map((item, index) => (
                <ListItem
                  key={index}
                  imageSrc={item.imageSrc}
                  text={item.text}
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-col pb-4 text-base font-light tracking-normal leading-7 text-black max-md:max-w-full">
            <p className="w-full italic max-md:max-w-full">
              <span className="text-black">
                So you can enjoy a rich and adventure-filled life{" "}
              </span>
              <span className="italic text-black">now</span>
              <span className="text-black"> — not</span>
              <br />
              <span className="text-black">"someday."</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamClubList;
