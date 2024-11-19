/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from "next/image";

interface MediaLogoProps {
  src: string;
  alt: string;
}

const MediaLogo: React.FC<MediaLogoProps> = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} className="object-contain flex-1 h-20 w-full" />
  );
};

export default MediaLogo;
