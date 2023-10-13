import React from "react";
import HomeScreen from "@/components/[locale]/mobile/home/HomeScreen";
import MobileApps from "@/components/[locale]/mobile/home/MobileApps";
import UXSolutions from "@/components/[locale]/mobile/home/UXSolutions";
import FeaturedProjects from "@/components/[locale]/mobile/home/FeaturedProjects";
import Plans from "@/components/[locale]/mobile/home/Plans";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

function MobileHome() {
  return (
    <>
      <div className="flex flex-col bg-linen dark:bg-blackbean">
        <HomeScreen />
        <UXSolutions />
        <FeaturedProjects />
        <MobileApps />
        <Plans />
      </div>
    </>
  );
}

export default MobileHome;
