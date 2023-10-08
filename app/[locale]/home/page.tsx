import React from "react";
import { Metadata } from "next";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";
import PhabletHome from "./PhabletHome";
import TabletHome from "./TabletHome";

export const generateMetadata = (): Metadata => {
  return {
    title: "Home",
    description:'UX MOCA home page'
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
