/**
 * This code was generated by Builder.io
 */
import React from "react";

export interface ListItemProps {
  icon: string;
  title: string;
  description: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <li className="flex items-start gap-2 w-full max-md:max-w-full">
      <div className="w-5 h-5">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-5 h-5 "
        />
      </div>
      <div className="flex-1">
        <strong className="text-black">{title}</strong>{" "}
        <span className="font-light text-black">{description}</span>
      </div>
    </li>
  );
};
