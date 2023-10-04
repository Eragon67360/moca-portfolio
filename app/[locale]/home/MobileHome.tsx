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
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold uppercase text-blackbean dark:text-secondary my-4">
            Moca
          </h1>
          <Image src={logo} alt="logo" />
        </div>
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
