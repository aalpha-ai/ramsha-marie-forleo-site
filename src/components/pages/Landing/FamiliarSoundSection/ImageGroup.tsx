/**
 * This code was generated by Builder.io
 */
import React from "react";
import { ImageData } from "./types";
import { cn } from "@/lib/utils";

interface ImageGroupProps {
  images: ImageData;
  idx: number;
}

const ImageGroup: React.FC<ImageGroupProps> = ({ images, idx }) => {
  return (
    <div
      className={cn("flex flex-col  justify-start items-start", {
        "justify-start items-end": idx === 0,
      })}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className="inline-block"
          width={image.width || 370}
        />
      ))}
    </div>
  );
};

export default ImageGroup;
