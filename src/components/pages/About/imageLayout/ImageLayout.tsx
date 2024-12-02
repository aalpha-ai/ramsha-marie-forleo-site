import * as React from "react";
import { ResponsiveImage } from "./ResponsiveImage";

export const ImageLayout: React.FC = () => {
  return (
    <div className="flex relative justify-center items-start px-32 py-3 min-h-[576px] max-md:px-5">
      <ResponsiveImage
        src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/8c3e58d7bd5d15379451084524c9829db2c624a8c93e38991e78bc2ea74d6c3c?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
        alt="Main content image"
        className="object-contain z-0 my-auto max-w-screen-md aspect-[1.39] min-w-[240px] w-[768px] max-md:max-w-full"
      />
      <div className="flex absolute inset-x-0 z-0 justify-center items-start self-start bottom-[21px] pl-[485px] pr-[484px] top-[458px] w-[1024px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center max-w-screen-lg w-[55px]">
          <div className="flex overflow-hidden items-start w-[55px]">
            <div className="flex overflow-hidden flex-col justify-center items-center min-h-[97px] w-[55px]">
              <ResponsiveImage
                src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/3ef03a56279600e70aaaed5d3b92f4f3316716cd638385fece814bf7750d05ef?apiKey=3445d620e72b4cd99c6f91e1d18e316a&"
                alt="Secondary content image"
                className="object-contain w-full aspect-[0.57]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLayout;