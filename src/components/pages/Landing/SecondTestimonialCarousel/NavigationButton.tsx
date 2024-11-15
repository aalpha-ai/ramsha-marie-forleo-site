/**
 * This code was generated by Builder.io
 */
import React from "react";

interface NavigationButtonProps {
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex overflow-hidden absolute right-0 bottom-24 z-0 flex-col justify-center items-center pt-1.5 pr-1 pl-1 w-20 left-[835px] top-[361px]"
      aria-label="Next slide"
      onClick={onClick}
    >
      <img
        
        src="https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/69b11d1cc68872aaceaf3c7d036cf985e891e48f6c6f2ce879814a6016cc7fc7?apiKey=48a1608e30b648c89bd5ed134a49b3b8&"
        alt=""
        className="object-contain w-full aspect-[4.57]"
      />
    </button>
  );
};

export default NavigationButton;
