import * as React from "react";
import { CollectionCard } from "./CollectionCard";
import { CollectionSectionProps } from "./types";

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  cards,
}) => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {cards.map((card, index) => (
        <CollectionCard key={index} {...card} />
      ))}
    </div>
  );
};
