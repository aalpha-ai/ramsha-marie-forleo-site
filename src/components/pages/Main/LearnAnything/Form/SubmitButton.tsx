/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="flex-1 font-montserrat-bold shrink py-5 w-full bg-ramsha-tertiary border border-black border-solid rounded-[80px] max-md:px-5 max-md:max-w-full"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
