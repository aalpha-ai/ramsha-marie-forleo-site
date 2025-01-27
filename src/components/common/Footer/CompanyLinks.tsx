/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Image from "next/image"

interface LinkItem {
  text: string;
  href: string;
}

const companyLinks: LinkItem[] = [
  { text: "About", href: "/about" },
  { text: "Work With Me", href: "/" },
  { text: "Podcast", href: "https://feeds.transistor.fm/the-let-go-let-god-movement-u3bf26ed98e652efe" },
  { text: "Training", href: "https://buy.stripe.com/eVa9DqcC04mv7kI9Do" },
];

const CompanyLinks: React.FC = () => {
  return (
    <section className="flex flex-col grow shrink pt-6 pb-16 text-white">
      <h2 className="text-[16px] font-subheader leading-5 uppercase whitespace-nowrap tracking-[2.16px]">
        Company
      </h2>
      <nav className="mt-3">
        <ul className="flex flex-col items-start w-full text-[16px] tracking-wide leading-7">
          {companyLinks.map((link, index) => (
            <li key={index} className="flex items-start pb-px">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default CompanyLinks;
