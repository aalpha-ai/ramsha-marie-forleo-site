/**
 * This code was generated by Builder.io.
 */
import React from "react";

const VideoButton: React.FC = () => {
  return (
    <div className=" bottom-10 z-0">
      <button
        className="flex items-center h-full gap-2"
        aria-label="Watch Video"
      >
        <div className="flex flex-col justify-center items-start ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea498f0f3ab49b0026b2f1a4e8a43fe87a74188bf6ef796db6ad6c9b21a1b4da?placeholderIfAbsent=true&apiKey=3445d620e72b4cd99c6f91e1d18e316a"
            alt="Play icon"
            className="object-contain w-full aspect-square"
          />
        </div>
        <p className="m-0 self-start text-xs font-extrabold leading-5 text-white uppercase  tracking-[2.16px]">
          Watch Video
        </p>
      </button>
    </div>
  );
};

export default VideoButton;
