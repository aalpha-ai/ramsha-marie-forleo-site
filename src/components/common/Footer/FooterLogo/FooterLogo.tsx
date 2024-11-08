import React from "react";
import Image from "next/image";
import SocialIcons from "@/components/common/Footer/SocialIcons/SocialIcons";

const FooterLogo: React.FC = () => {
  return (
    <header className="flex max-md:flex-col gap-10 justify-center md:justify-between items-center w-full max-md:max-w-full">
      <div className="justify-start">
        <Image
          src="/default-logo.svg"
          alt="logo"
          width={100}  // Replace with actual width
          height={100} // Replace with actual height
          className="object-contain max-w-full" // Added pl-0 and pr-40
        />
      </div>
      <div className="">
        <SocialIcons />
      </div>
    </header>
  );
};

export default FooterLogo;
