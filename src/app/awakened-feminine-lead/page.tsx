'use client';

import React from "react";
import AwakenedFeminineLead from "@/components/pages/AwakenedFeminineLead";

export default function Page() {
  return (
    <div className="min-h-screen bg-black overflow-auto" style={{ backgroundColor: 'black' }}>
      <AwakenedFeminineLead />
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
    </div>
  );
}
