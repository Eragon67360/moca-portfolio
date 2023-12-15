import React from "react";
import HomeScreen from "@/components/[locale]/mobile/home/HomeScreen";
import MobileApps from "@/components/[locale]/mobile/home/MobileApps";
import UXSolutions from "@/components/[locale]/mobile/home/UXSolutions";
import FeaturedProjects from "@/components/[locale]/mobile/home/FeaturedProjects";
import Plans from "@/components/[locale]/mobile/home/Plans";

function MobileHome() {
  return (
    <>
      <div className="flex flex-col bg-light_surface dark:bg-dark_background">
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
