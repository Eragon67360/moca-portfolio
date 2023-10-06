'use client'
import { motion, Variants } from "framer-motion";
import AnimatedTextCharacter from "@/components/AnimatedText";
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
        
        <DesktopHomeScreen/>

        <Delimiter />

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <UXSolutions />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <FeaturedProjects />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <DesktopApps />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <Plans />
        </motion.div>
      </div>
    </>
  );
}

export default DesktopHome;
