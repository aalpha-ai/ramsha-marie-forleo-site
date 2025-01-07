/**
 * This code was generated by Builder.io.
 */
import React from "react";
import NavigationItem from "./NavigationItem";

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface NavigationProps {
  isMobile?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Blog", href: "/blog"},
  { label: "Work With Me" },
  { label: "In The Press" },
  { label: "About", href: "/about" },
];

const Navigation: React.FC<NavigationProps> = ({ isMobile }) => {
  return (
    <nav className={`font-[700] text-lg xl:text-xl ${isMobile ? 'flex flex-col w-full' : 'flex items-center justify-between w-full max-w-[600px]'}`}>
      {navItems.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Navigation;
