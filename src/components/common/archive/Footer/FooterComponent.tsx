


import React from "react";
import FooterLogo from "./FooterLogo/FooterLogo";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer";

const FootComponent: React.FC = () => {
  return (
    <div className="flex flex-col pt-20 border-t border-solid border-t-zinc-800">
      <div className="flex flex-col self-center px-20 max-w-full w-[1400px] max-md:px-4">
        <FooterLogo />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default FootComponent;
