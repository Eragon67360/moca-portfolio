import React from "react";
import DesktopHome from "./home/DesktopHome";
import MobileHome from "./home/MobileHome";
import PhabletHome from "./home/PhabletHome";
import TabletHome from "./home/TabletHome";

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
