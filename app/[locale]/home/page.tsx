import React from "react";
import { Metadata } from "next";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";
import PhabletHome from "./PhabletHome";
import TabletHome from "./TabletHome";

export const generateMetadata = (): Metadata => {
  return {
    title: "Home",
    description:'Discover the world of UX design with UX MOCA. Explore our home page for insights, resources, pricings and more...'
  };
};


export default function Home() {
  return (
    <>
      <div className="mobile">
        <MobileHome />
      </div>
      <div className="phablet">
        <PhabletHome />
      </div>
      <div className="tablet">
        <TabletHome />
      </div>
      <div className="desktop">
        <DesktopHome />
      </div>
    </>
  );
}
