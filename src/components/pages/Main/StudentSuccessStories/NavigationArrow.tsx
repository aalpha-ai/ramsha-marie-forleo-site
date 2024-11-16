/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Image from "next/image";

interface NavigationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  onClick,
}) => {
  const isLeft = direction === "left";
  const position = isLeft ? "left-0" : "right-0";
  const imageSrc = isLeft
    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f67d979e16ec8aec8128b221cfe22a386318feb06ff7559f481b8605604a144d?placeholderIfAbsent=true&apiKey=3445d620e72b4cd99c6f91e1d18e316a"
    : "https://cdn.builder.io/api/v1/image/assets/TEMP/7b5ec9d8482c408dd00be073c56c55cb7e5c1857d2cfb91840dabfc51179f64b?placeholderIfAbsent=true&apiKey=3445d620e72b4cd99c6f91e1d18e316a";

  return (
    <div
      className={`flex overflow-hidden absolute ${position} z-0 flex-col top-1/2 -translate-y-1/2`}
      onClick={onClick}
    >
      <Image
        src={imageSrc}
        alt={`${direction} navigation arrow`}
        className="object-contain w-10 aspect-[0.98]"
        width={40}
        height={39}
      />
    </div>
  );
};

export default NavigationArrow;
