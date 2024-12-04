import * as React from "react";
import { CollectionCardProps } from "./types";

export const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  image
}) => {
  return (
    <a 
      href="#" 
      className="group block relative aspect-[4/5] rounded-2xl overflow-hidden"
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
      
      {/* Text Content */}
      <div className="absolute inset-0 p-8 flex items-end">
        <h2 className="text-white text-2xl font-bold leading-tight">
          {title}
        </h2>
      </div>
    </a>
  );
};
