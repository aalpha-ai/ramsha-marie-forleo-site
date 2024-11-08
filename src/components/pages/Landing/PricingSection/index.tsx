/**
 * This code was generated by Builder.io
 */
import React from "react";
import PricingCard from "./PricingCard";
import SecurePayment from "./SecurePayment";
import WaitlistOverlay from "./WaitlistOverlay";

interface PricingOption {
  type: string;
  price: string;
  period: string;
  buttonText: string;
  highlightText: string;
  highlightColor: string;
}

const pricingOptions: PricingOption[] = [
  {
    type: "As Low As",
    price: "$87",
    period: "/mo",
    buttonText: "Join Us",
    highlightText: "Most Flexible",
    highlightColor: "bg-rose-50",
  },
  {
    type: "One payment of",
    price: "$2497",
    period: "",
    buttonText: "Join Us",
    highlightText: "Most Popular 🔥",
    highlightColor: "bg-green-200",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="flex relative flex-col items-center bg-stone-50">
      <div className="flex z-0 flex-col self-center px-14 pt-24 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="px-96 w-full text-sm font-bold tracking-widest leading-6 text-center uppercase text-stone-400 max-md:px-5 max-md:max-w-full">
          Let's team up!
        </h2>
        <h3 className="px-60 mt-3 w-full text-4xl text-center leading-[62.4px] text-neutral-800 max-md:px-5 max-md:max-w-full">
          Join Dream Club Now
        </h3>
        <div className="flex flex-wrap gap-10 justify-center px-5 pt-9 pb-5 mt-3 w-full max-md:max-w-full">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>
      <WaitlistOverlay />
    </section>
  );
};

export default PricingSection;
