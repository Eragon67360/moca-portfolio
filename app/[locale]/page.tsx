import React from "react";
import { Metadata } from "next";
import DesktopLanding from "./landing/DesktopLanding";
import MobileLanding from "./landing/MobileLanding";

export const generateMetadata = (): Metadata => {
  return {
    description: "Our official UX MOCA website",
  };
};


export default function Home() {
  return (
    <>
      <div className="mobile">
        <MobileLanding />
      </div>
      <div className="phablet">
        <MobileLanding />
      </div>
      <div className="tablet">
        <DesktopLanding />
      </div>
      <div className="desktop">
        <DesktopLanding />
      </div>
    </>
  );
}
