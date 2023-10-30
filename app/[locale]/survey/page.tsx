import React from "react";
import { Metadata } from "next";
import DesktopSurvey from "./DesktopSurvey";

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
        <DesktopSurvey />
      </div>
      <div className="phablet">
        <DesktopSurvey />
      </div>
      <div className="tablet">
        <DesktopSurvey />
      </div>
      <div className="desktop">
        <DesktopSurvey />
      </div>
    </>
  );
}
