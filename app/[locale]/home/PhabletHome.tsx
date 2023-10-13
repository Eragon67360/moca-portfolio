"use client";
import React from "react";
import PhabletApps from "@/components/[locale]/phablet/home/TabletApps";
import UXSolutions from "@/components/[locale]/phablet/home/UXSolutions";
import Plans from "@/components/[locale]/phablet/home/Plans";
import FeaturedProjects from "@/components/[locale]/phablet/home/FeaturedProjects";
import PhabletHomeScreen from "@/components/[locale]/phablet/home/HomeScreen";

function TabletHome() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden overflow-hidden">
        <PhabletHomeScreen />
        <UXSolutions />
        <FeaturedProjects />
        <PhabletApps />
        <Plans />
      </div>
    </>
  );
}

export default TabletHome;
