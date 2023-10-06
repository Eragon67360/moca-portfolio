import React from "react";
import DesktopLanding from "./landing/DesktopLanding";
import MobileLanding from "./landing/MobileLanding";

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
