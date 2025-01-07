import React from "react";

const PrimaryButton: React.FC<{
  text: string;
  disabled?: boolean;
  isSubmittingMessage?: string;
  isSubmitting?: boolean;
}> = ({ text, disabled, isSubmittingMessage, isSubmitting }) => {
  return (
    <div className="flex flex-col my-4 w-full text-center text-white max-md:max-w-full max-w-2xl mx-auto">
      <button
        type="submit"
        disabled={disabled}
        className="font-subheader px-32 py-4 bg-ramsha-tertiary 
      rounded-md tracking-wider max-md:px-5 disabled:opacity-50
      transition-all duration-300 ease-in-out
      hover:brightness-110"
  >
      {isSubmitting && isSubmittingMessage && isSubmittingMessage.length > 0 ? isSubmittingMessage : text}
    </button>
  </div>
)};

export default PrimaryButton;
