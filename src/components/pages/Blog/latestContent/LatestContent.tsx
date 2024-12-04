import * as React from "react";
import { ContentItem } from "./ContentItem";

const contentData = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/7a9e4658a7f084f1cf81e137f38ec8d03c20221839ef81a03e58b7992e0ea797?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    title:
      "Why Everything You Know\nAbout Success & Productivity Is\nWrong with Seth Godin",
    date: "October 29, 2024",
    videoIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/49562bc8ed35893c8cdb291255bb6f0ca564684b8dea9b03d18d466c296d9e3d?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    audioIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/1a3e013358d44c1c5749d819a185a764dcb0d9effe467cfe519dd077a5bc60a1?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/480918f851892592f582f47a76f1415d12c8f90db07715415e89c8ca26925470?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    title:
      "Going Viral — How to Stand Out\n& Make Sales in a Crowded\nMarket | Laney Crowell",
    date: "October 8, 2024",
    videoIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/778476aa09b2260f1a3fd61ac8cad2d5775c28fca351c48eed77874601bb2401?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    audioIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/77b7a99914efe2cff8a1865fa86701a6e9e918963a844e0b92acf91fc1161572?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/9d2622f9dde10477d79be9f14cdf957c0a39536f963c2508c19b792440925038?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    title:
      "Feeling Lost & Unhappy in Life?\nFind Meaning with Elizabeth\nGilbert",
    date: "October 1, 2024",
    videoIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/dd135a3c0a0d67ea32d32242a0e78e39bd83fb421412c9bdf40ee71f94d0f239?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
    audioIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/e99956e2c6d1aff69d6d223b992813874bec75eb3f1c41b347d5338d38caa85f?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  },
];

export const LatestContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-red-100">
      <div className="flex flex-col px-11 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="self-center px-96 pb-px text-xs font-extrabold leading-loose text-center uppercase text-neutral-800 tracking-[2.16px] max-md:px-5 max-md:max-w-full">
          The latest in...
        </div>
        <div className="flex flex-wrap justify-center px-px pt-4 pb-0.5 mt-11 border-t border-solid border-t-black max-md:mt-10 max-md:mr-1.5">
          <div className="flex flex-col grow shrink-0 px-2.5 text-4xl tracking-wider leading-loose basis-0 min-h-[1px] text-neutral-800 w-fit max-md:max-w-full">
            <div className="w-full max-md:max-w-full">Career & Business</div>
          </div>
          <div className="flex flex-col pt-1.5 pr-1.5 pb-3 pl-9 my-auto text-xs font-bold leading-none text-right text-black uppercase min-h-[1px] tracking-[2.4px] max-md:pl-5">
            <button className="flex-1 shrink w-full hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800">
              View All →
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-5">
          {contentData.map((item, index) => (
            <ContentItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
