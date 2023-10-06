import React from "react";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";
import PhabletHome from "./PhabletHome";
import TabletHome from "./TabletHome";

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
