/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Image from "next/image";

type ImageItemProps = {
  src: string;
  className?: string;
};

export function ImageItem({ src, className = "" }: ImageItemProps) {
  return (
    <Image
      src={src}
      className={`object-contain w-full max-md:max-w-full ${className}`}
      width={500}
      height={500}
      alt=""
    />
  );
}
