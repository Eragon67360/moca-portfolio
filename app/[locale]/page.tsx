import React from "react";
import { Metadata } from "next";
import DesktopLanding from "./landing/DesktopLanding";
import MobileLanding from "./landing/MobileLanding";

export const generateMetadata = (): Metadata => {
  return {
    description: "Discover the ultimate user experience with UX MOCA. Explore our landing page and unlock the power of intuitive design.",
  };
};


export default function Home() {
  return (
    <>
      <div className="mobile">
        <MobileLanding />
      </div>
      <div className="phablet">
        <DesktopLanding />
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
