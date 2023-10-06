"use client";
import { motion, Variants } from "framer-motion";
import AnimatedTextCharacter from "@/components/AnimatedText";
import ArcText from "@/components/ArcText";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import Link from "next/link";
import DesktopApps from "@/components/[locale]/desktop/home/DesktopApps";
import UXSolutions from "@/components/[locale]/desktop/home/UXSolutions";
import Plans from "@/components/[locale]/desktop/home/Plans";
import FeaturedProjects from "@/components/[locale]/desktop/home/FeaturedProjects";
import { useTheme } from "next-themes";

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
        <div className="h-[87.5vh] bg-linen dark:bg-falured">
          <div className=" flex h-full justify-center items-center text-center select-none font-bold text-5xl text-blackbean space-y-6">
            <div className="flex flex-col font-bold text-5xl text-center  items-center">
              <AnimatedTextCharacter />
            </div>
          </div>
        </div>

        <div className="h-32 flex justify-evenly items">
          <div className="bg-linen dark:bg-blackbean w-1/20"></div>
          <div className="bg-cinnabar w-1/6"></div>
          <div className="bg-linen dark:bg-blackbean w-1/6"> </div>
          <div className="bg-cinnabar w-1/6"></div>
          <div className="bg-linen dark:bg-blackbean w-1/6"></div>
          <div className="bg-blackbean dark:bg-linen w-1/6"></div>
        </div>

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
