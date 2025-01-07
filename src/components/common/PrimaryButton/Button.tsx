import { LucideIcon } from 'lucide-react';
import React from "react";

const Button: React.FC<{
  text: string;
  bgColor?: string;    
  disabled?: boolean;
  isSubmittingMessage?: string;
  isSubmitting?: boolean;
  className?: string;
  icon?: LucideIcon;
}> = ({ text, disabled, isSubmittingMessage, isSubmitting, bgColor = 'bg-ramsha-tertiary', className, icon: Icon }) => {
  return (
    <div className="flex flex-col my-4 w-full text-center text-white max-md:max-w-full max-w-2xl mx-auto">
      <button
        type="submit"
        disabled={disabled}
        className={className ? `${className}` : `font-subheader px-32 py-4
      rounded-md tracking-wider max-md:px-5 disabled:opacity-50
      transition-all duration-300 ease-in-out
      hover:brightness-110 flex flex-row items-center justify-center gap-2 whitespace-nowrap ${bgColor}`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {isSubmitting ? isSubmittingMessage : text}
    </button>
  </div>
)};

export default Button;
