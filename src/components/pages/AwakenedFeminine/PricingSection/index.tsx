/**
 * This code was generated by Builder.io
 */
import React from "react";
import PricingCard from "./PricingCard";
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
    type: "Monthly Investment",
    price: "$1,200",
    period: "/mo",
    buttonText: "Join Us",
    highlightText: "12 Month Journey",
    highlightColor: "bg-rose-50",
  },
  {
    type: "One payment of",
    price: "$12,000",
    period: "",
    buttonText: "Join Us",
    highlightText: "Most Popular 🌙",
    highlightColor: "bg-green-200",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="flex relative flex-col items-center bg-ramsha-primary text-white">
      <div className="flex z-0 flex-col self-center px-14 pt-24 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="font-subheader w-full text-sm font-bold tracking-widest leading-6 text-center uppercase max-md:px-5 max-md:max-w-full">
          Signature Program
        </h2>
        <h3 className="font-header px-60 mt-3 w-full text-4xl text-center leading-[62.4px] max-md:px-5 max-md:max-w-full">
          Somatic Healing & Nervous System Expansion
        </h3>
        <p className="text-center mt-2 text-lg">
          For high-achieving Muslim women ready to awaken their feminine power and trust in Allah
        </p>
        <div className="flex max-md:flex-col gap-10 justify-center pt-9 pb-5 mt-3 w-full max-md:max-w-full">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
        <div className="text-center mt-8 text-sm">
          <p className="font-bold mb-2">Program Includes:</p>
          <ul className="space-y-2">
            <li>Weekly Nervous System Expansion sessions</li>
            <li>2-Day Signature Graduation Retreat in New York City</li>
            <li>Access to the full offer suite (Rich Receiver, Embodying The One, and new additions)</li>
            <li>Optional Year 2: Certification as a Somatic Healer</li>
          </ul>
          <p className="mt-4 font-bold">
            1:1 Upgrade Available: Monthly private coaching calls starting at $2,200/month
          </p>
        </div>
      </div>
      <WaitlistOverlay />
    </section>
  );
};

export default PricingSection;
