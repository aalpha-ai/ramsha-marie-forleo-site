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
  afterIcon?: LucideIcon;
  onClick?: () => void;
}> = ({ text, disabled, isSubmittingMessage, isSubmitting, bgColor = 'bg-ramsha-tertiary', className, icon: Icon, afterIcon: AfterIcon, onClick }) => {
  return (
    <div className="flex flex-col my-4 w-full text-center text-white max-md:max-w-full max-w-2xl mx-auto text-sm lg:text-base">
      <button
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className={className ? `${className}` : `px-10 font-subheader py-4
      rounded-md tracking-wider max-md:px-5 disabled:opacity-50
      transition-all duration-300 ease-in-out
      hover:brightness-110 flex flex-row items-center justify-center gap-2 whitespace-nowrap ${bgColor}`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {isSubmitting ? isSubmittingMessage : text}
    {AfterIcon && <AfterIcon className="w-5 h-5" />}
    </button>
  </div>
)};

export default Button;
