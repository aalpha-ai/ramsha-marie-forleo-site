'use client';

import React from "react";
import AwakenedFemmeLeadMagnet from "@/components/pages/AwakenedFemmeLeadMagnet";

export default function Page() {
  return (
    <div className="min-h-screen bg-black overflow-auto" style={{ backgroundColor: 'black' }}>
      <AwakenedFemmeLeadMagnet />
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
    </div>
  );
}
