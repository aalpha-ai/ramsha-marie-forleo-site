/**
 * This code was generated by Builder.io
 */
import * as React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={className}>
      {text}
    </button>
  );
};
