/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import FormDisclaimer from "./FormDisclaimer";

const SubscriptionForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-3 justify-center text-base ">
      <div className="flex gap-3 justify-center w-full text-black max-md:max-w-full">
        <FormInput
          label="First Name"
          type="text"
          id="firstName"
          placeholder="First Name"
        />
        <FormInput
          label="Enter Your Email"
          type="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      <SubmitButton text="GET INSTANT ACCESS" />
      {/* <FormDisclaimer /> */}
    </form>
  );
};

export default SubscriptionForm;
