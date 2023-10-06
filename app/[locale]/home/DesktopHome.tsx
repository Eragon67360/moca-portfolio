"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import DesktopApps from "@/components/[locale]/desktop/home/DesktopApps";
import UXSolutions from "@/components/[locale]/desktop/home/UXSolutions";
import Plans from "@/components/[locale]/desktop/home/Plans";
import FeaturedProjects from "@/components/[locale]/desktop/home/FeaturedProjects";

import Delimiter from "@/components/Delimiter";
import DesktopHomeScreen from "@/components/[locale]/desktop/home/HomeScreen";

function DesktopHome() {
  const sectionVariants: Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.3,
      },
    },
  };

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
