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
  { text: "About", href: "#" },
  { text: "Work With Me", href: "#" },
  { text: "In The Press", href: "#" },
  { text: "Blog", href: "#" },
];

const CompanyLinks: React.FC = () => {
  return (
    <section className="flex flex-col grow shrink pt-6 pb-16 text-white">
      <h2 className="text-[16px] font-montserrat-bold leading-5 uppercase whitespace-nowrap tracking-[2.16px]">
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
