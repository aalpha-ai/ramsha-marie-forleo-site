import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import YearlyGoalsMap from "./YearlyGoalsMap"

export default function Component() {
  return (
    <div className="[&_*]:transition-all [&_*]:duration-500 ">
      <Header />
      <YearlyGoalsMap />
      <Footer />
    </div>
  );
}
