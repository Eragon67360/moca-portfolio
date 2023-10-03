"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import AnimatedTextCharacter from "@/components/AnimatedText";
import ArcText from "@/components/ArcText";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import Link from "next/link";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import DesktopApps from "@/components/[locale]/desktop/home/DesktopApps";
import UXSolutions from "@/components/[locale]/desktop/home/UXSolutions";
import Plans from "@/components/[locale]/desktop/home/Plans";
import FeaturedProjects from "@/components/[locale]/desktop/home/FeaturedProjects";

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
        <div className="h-[87.5vh] bg-linen">
          <div className=" flex h-full justify-center items-center text-center select-none font-bold text-5xl text-blackbean space-y-6">
            <div className="flex flex-col font-bold text-5xl text-center  items-center">
              <AnimatedTextCharacter
                text="Crafting Experiences, Shaping Futures:"
                color={"#310F0D"}
              />
              <AnimatedTextCharacter
                text="Your UX Design Partner"
                color={"#742119"}
              />
            </div>
          </div>
        </div>
        <div className="h-[10vh] bg-cinnabar flex justify-evenly items-center ">
          <Link
            href="#pricings"
            className="flex flex-col h-full w-full items-center"
          >
            <ArcText text={"Scroll to pricings  Scroll to pricings  "} />

            <div className="h-full" />
          </Link>
          <Image className="z-10" src={logo} alt="logo" width={200} />

          <Link
            href={"#featuredprojects"}
            passHref
            className="flex flex-col h-full w-full items-center"
          >
            <ArcText text={"Scroll to featured projects  "} />

            <div className="h-full" />
          </Link>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
        >
          <UXSolutions />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
        >
          <FeaturedProjects />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
        >
          <DesktopApps />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
        >
          <Plans />
        </motion.div>
      </div>
    </>
  );
}

export default DesktopHome;
