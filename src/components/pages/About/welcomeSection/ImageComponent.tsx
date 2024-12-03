import * as React from "react";
import { ImageProps } from "./types";

export const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  className,
}) => <img src={src} alt={alt} className={className} />;
