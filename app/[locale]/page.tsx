"use client";
import React, { useState, useEffect, useRef } from "react";
import DesktopHome from "./home/DesktopHome";
import MobileHome from "./home/MobileHome";
import PhabletHome from "./home/PhabletHome";
import TabletHome from "./home/TabletHome";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth < 640 && <DesktopHome />}
      {screenWidth >= 640 && screenWidth < 1024 && <DesktopHome />}
      {screenWidth >= 1024 && <DesktopHome />}
    </>
  );
}
