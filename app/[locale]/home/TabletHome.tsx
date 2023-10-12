"use client";
import React from "react";
import TabletApps from "@/components/[locale]/tablet/home/TabletApps";
import UXSolutions from "@/components/[locale]/tablet/home/UXSolutions";
import Plans from "@/components/[locale]/tablet/home/Plans";
import FeaturedProjects from "@/components/[locale]/tablet/home/FeaturedProjects";
import TabletHomeScreen from "@/components/[locale]/tablet/home/HomeScreen";

function TabletHome() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden overflow-hidden">
        <TabletHomeScreen />
        <UXSolutions />
        <FeaturedProjects />
        <TabletApps />
        <Plans />
      </div>
    </>
  );
}

export default TabletHome;
