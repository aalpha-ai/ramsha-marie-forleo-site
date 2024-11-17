/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface LinkItem {
  text: string;
  href: string;
}

const legalLinks: LinkItem[] = [
  { text: "Terms", href: "/terms" },
  { text: "Privacy", href: "/privacy" },
  { text: "Cookie Policy", href: "https://www.marieforleo.com/cookie-policy" },
  { text: "Support", href: "https://www.marieforleo.com/support" },
];

const LegalLinks: React.FC = () => {
  return (
    <section className="flex flex-col justify-center pt-5 mt-11 mb-0 w-full text-xs font-bold tracking-widest leading-3 text-right text-white uppercase border-t border-solid border-t-stone-300 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <div className="flex flex-wrap grow shrink gap-3.5 items-start px-2.5 pt-1.5 pb-0.5 min-h-[1px] min-w-[240px] w-[570px] max-md:max-w-full">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex flex-col grow shrink px-2.5 min-h-[1px] min-w-[240px] w-[380px] max-md:max-w-full">
          <p className="w-full max-md:max-w-full">
            © 2024 Marie Forleo International
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalLinks;
