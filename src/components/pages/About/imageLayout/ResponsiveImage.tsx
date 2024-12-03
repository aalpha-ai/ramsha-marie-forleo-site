import * as React from "react";
import { ImageProps } from "./types";

export const ResponsiveImage: React.FC<ImageProps> = ({
  src,
  alt,
  className,
}) => {
  return <img src={src} alt={alt} className={className} loading="lazy"/>;
};
