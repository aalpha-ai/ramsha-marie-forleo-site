/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  required
}) => {
  return (
    <div className="flex flex-col pt-1.5 mt-1.5 w-full text-base font-bold text-black max-md:max-w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-lg flex overflow-hidden justify-center items-start px-5 pt-3.5 pb-4 bg-white outline-none max-md:max-w-full"
      />
    </div>
  );
};

export default FormInput;
