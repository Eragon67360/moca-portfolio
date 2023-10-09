'use client'
import React from "react";
import DesktopApps from "@/components/[locale]/desktop/home/DesktopApps";
import UXSolutions from "@/components/[locale]/desktop/home/UXSolutions";
import Plans from "@/components/[locale]/desktop/home/Plans";
import FeaturedProjects from "@/components/[locale]/desktop/home/FeaturedProjects";

import Delimiter from "@/components/Delimiter";
import DesktopHomeScreen from "@/components/[locale]/desktop/home/HomeScreen";

function DesktopHome() {
  return (
    <>
      <div className="flex flex-col">
        <DesktopHomeScreen />
        <Delimiter />
        <UXSolutions />
        <FeaturedProjects />
        <DesktopApps />
        <Plans />
      </div>
    </>
  );
}

export default DesktopHome;
