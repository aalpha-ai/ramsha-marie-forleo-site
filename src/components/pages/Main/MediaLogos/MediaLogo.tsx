/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Image from "next/image";

type MediaLogoProps = {
  src: string;
  alt: string;
  className: string;
};

const MediaLogo: React.FC<MediaLogoProps> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`object-contain shrink-0 self-stretch my-auto max-w-24 w-full ${className}`}
      width={192}
      height={48}
      quality={100}
      priority={true}
    />
  );
};

export default MediaLogo;
