"use client";
import React, { useState, useEffect, useRef } from "react";
import DesktopHome from "./home/DesktopHome";
import MobileHome from "./home/MobileHome";
import PhabletHome from "./home/PhabletHome";
import TabletHome from "./home/TabletHome";
import Resizer from "@/components/Resizer";

export default function Home() {
  return (
    <>
      <Resizer
        MobileComponent={<MobileHome />}
        PhabletComponent={<PhabletHome />}
        TabletComponent={<TabletHome />}
        DesktopComponent={<DesktopHome />}
      />
    </>
  );
}
