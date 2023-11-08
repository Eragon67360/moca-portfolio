import React from "react";
import { Metadata } from "next";
import DesktopSurvey from "./DesktopSurvey";
import MobileSurvey from "./MobileSurvey";
import PhabletSurvey from "./PhabletSurvey";
import TabletSurvey from "./TabletSurvey";
export const generateMetadata = (): Metadata => {
  return {
    title: "Home",
    description:
      "Discover the world of UX design with UX MOCA. Explore our home page for insights, resources, pricings and more...",
  };
};

export default function Home() {
  return (
    <>
      <div className="mobile">
        <MobileSurvey />
      </div>
      <div className="phablet">
        <PhabletSurvey />
      </div>
      <div className="tablet">
        <TabletSurvey />
      </div>
      <div className="desktop">
        <DesktopSurvey />
      </div>
    </>
  );
}
