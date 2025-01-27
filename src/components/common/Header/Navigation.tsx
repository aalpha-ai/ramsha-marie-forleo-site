/**
 * This code was generated by Builder.io.
 */
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const navItems = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Work With Me",
    href: "/awakened-feminine",
    items: [
      { label: "Tawakul Circle", href: "/" },
      { label: "Awakened Feminine", href: "/awakened-feminine" },
      { label: "Apply for a 1:1 session", href: "/" },
    ]
  },
  {
    label: "Podcast",
    href: "https://feeds.transistor.fm/the-let-go-let-god-movement-u3bf26ed98e652efe",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    mobile: true,
  },
  {
    label: "Need Help?",
    href: "mailto:teamgf@glowingfemmme.com",
    mobile: true,
  }
];

interface NavigationProps {
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile }) => {
  return (
    <nav className={`${
      isMobile 
        ? 'flex flex-col w-full gap-6' 
        : 'flex items-center justify-between w-full max-w-[600px] gap-12'
    }`}>
      {navItems.filter(item => !item.mobile).map((section, idx) => (
        section.items ? <DropdownMenu key={idx}>
          <DropdownMenuTrigger className="rounded-md hover:bg-ramsha-tertiary outline-none flex items-center gap-1 text-white transition-colors">
            <span className="p-2 tracking-wider uppercase font-bold text-sm lg:text-base">
              {section.label}
            </span>
            {/* <ChevronDown className="h-4 w-4" /> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-stone-900 border-stone-800"
            align={isMobile ? "start" : "center"}
          >
            {section.items && section.items.map((item, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link
                  href={item.href}
                  className="focus:bg-ramsha-secondary tracking-wider uppercase font-bold text-sm lg:text-base text-white cursor-pointer w-full"
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> : 
          <Link href={section.href} key={idx}>
            <span className="p-3 rounded-md tracking-wider uppercase font-bold text-sm lg:text-base hover:bg-ramsha-tertiary transition-colors">
              {section.label}
            </span>
          </Link>
      ))}
    </nav>
  );
};

export default Navigation;
