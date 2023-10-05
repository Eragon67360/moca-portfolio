"use client";
import React, { useState, useEffect, useRef } from "react";
import DesktopHome from "./home/DesktopHome";
import MobileHome from "./home/MobileHome";
import PhabletHome from "./home/PhabletHome";
import TabletHome from "./home/TabletHome";
import dynamic from "next/dynamic";

const Resizer = dynamic(() => import("@/components/Resizer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* <Resizer
        MobileComponent={<MobileHome />}
        PhabletComponent={<PhabletHome />}
        TabletComponent={<TabletHome />}
        DesktopComponent={<DesktopHome />}
      /> */}
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
